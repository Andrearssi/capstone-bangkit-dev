import { Storage } from '@google-cloud/storage';
import { v4 as uuidv4 } from 'uuid';
import { Articles, ArticleImages } from '../models/ArticlesModel.js';
import { errorResponse, successResponse } from '../config/Response.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const path = await import('path');
const keyFilename = path.resolve(__dirname, '..', 'config', 'key.json');

const storage = new Storage({
  projectId: 'testing-backend-388116',
  keyFilename,
});

const bucketName = 'images-berasai';

export const getArticles = async (req, res) => {
  try {
    const articles = await Articles.findAll({
      include: ArticleImages,
    });
    return successResponse(res, articles);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

export const getArticlesById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Articles.findByPk(id, {
      include: ArticleImages,
    });
    if (!article) {
      return errorResponse(res, 'article not found', 404);
    }
    return successResponse(res, article);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

const uploadImages = async (files, articleId) => {
  const uploadedImages = [];
  const gcsBaseUrl = `https://storage.googleapis.com/${bucketName}/`;

  // Jika hanya ada satu file, ubah ke dalam array agar bisa diiterasi
  if (!Array.isArray(files)) {
    files = [files];
  }

  for (const file of files) {
    const fileExtension = path.extname(file.name);
    const fileName = `${uuidv4()}${fileExtension}`;
    const filePath = `articles/${articleId}/${fileName}`;

    const fileBuffer = file.data;

    await storage.bucket(bucketName).file(filePath).save(fileBuffer, {
      metadata: {
        contentType: file.mimetype,
      },
    });

    const imageEntry = await ArticleImages.create({
      imagePath: `${gcsBaseUrl}${filePath}`, // Simpan URL lengkap sebagai imagePath
      articleId,
    });

    uploadedImages.push(imageEntry);
  }

  return uploadedImages;
};

export const createArticle = async (req, res) => {
  const { judul, author, content } = req.body;

  const schema = {
    judul: { type: "string", min: 3, max: 255 },
    author: { type: "string", min: 3, max: 255 },
    content: { type: "string", min: 3 },
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return errorResponse(res, validate, 400);
  }

  try {
    const article = await Articles.create({
      judul,
      author,
      content,
    });

    const uploadedImages = await uploadImages(req.files['images'], article.id);

    article.article_images = uploadedImages;

    return successResponse(res, article, 'article not found', 201);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

export const updateArticle = async (req, res) => {
  const { id } = req.params;

  const article = await Articles.findByPk(id, {
    include: ArticleImages,
  });

  if (!article) {
    return errorResponse(res, 'article not found', 404);
  }

  const { judul, author, content, images } = req.body;

  const schema = {
    judul: { type: "string", min: 3, max: 255 },
    author: { type: "string", min: 3, max: 255 },
    content: { type: "string", min: 3 },
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return errorResponse(res, validate, 400);
  }

  try {
    await article.update({
      judul: judul || article.judul,
      author: author || article.author,
      content: content || article.content,
    });

    if (images && images.length > 0) {
      await Promise.all(
        article.article_images.map(async (imageEntry) => {
          await storage.bucket(bucketName).file(imageEntry.imagePath).delete();
          await imageEntry.destroy();
        })
      );

      const uploadedImages = await uploadImages(images, article.id);

      article.article_images = uploadedImages;
    }

    return successResponse(res, article, 'article updated', 200);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

export const deleteArticle = async (req, res) => {
  const { id } = req.params;

  const article = await Articles.findByPk(id, {
    include: ArticleImages,
  });

  if (!article) {
    return errorResponse(res, 'article not found', 404);
  }

  try {
    await Promise.all(
      article.article_images.map(async (imageEntry) => {
        const imagePath = imageEntry.imagePath.replace(`https://storage.googleapis.com/${bucketName}/`, '');
        await storage.bucket(bucketName).file(imagePath).delete();
        await imageEntry.destroy();
      })
    );

    await article.destroy();

    return successResponse(res, null, 'article deleted', 200);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

