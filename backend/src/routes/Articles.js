/* eslint-disable linebreak-style */
import express from "express";
import {
  getArticles,
  createArticle,
  getArticlesById,
  updateArticle,
  deleteArticle,
} from "../controllers/Articles.js";
import verifyToken from "../middleware/verifyToken.js";

const articlesRouter = express.Router();

articlesRouter.get("/", getArticles);
articlesRouter.post("/", verifyToken, createArticle);
articlesRouter.get("/:id", verifyToken, getArticlesById);
articlesRouter.put("/:id", verifyToken, updateArticle);
articlesRouter.delete("/:id", verifyToken, deleteArticle);

export default articlesRouter;
