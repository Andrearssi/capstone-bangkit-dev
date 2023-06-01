/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import Validator from "fastest-validator";
import Prices from "../models/PricesModel.js";
import { errorResponse, successResponse } from "../config/Response.js";

const v = new Validator();

export const getPrices = async (req, res) => {
  try {
    const prices = await Prices.findAll();
    return successResponse(res, prices);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

export const getPricesById = async (req, res) => {
  const { id } = req.params;
  try {
    const price = await Prices.findByPk(id);
    if (!price) {
      return errorResponse(res, "price not found", 404);
    }
    return successResponse(res, price);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

export const createPrice = async (req, res) => {
  let { harga, provinsi } = req.body;
  const schema = {
    harga: { type: "string", min: 3, max: 255 },
    provinsi: { type: "string", min: 3, max: 255 },
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return errorResponse(res, validate, 400);
  }
  if (!harga.match(/^\d*(\.\d+)?$/)) {
    return errorResponse(res, "harga is'n number!", 400);
  }
  harga = parseInt(harga);
  try {
    const inserted = {
      harga,
      provinsi,
    };
    await Prices.create(inserted);
    return successResponse(res, inserted, "success", 201);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

export const updatePrice = async (req, res) => {
  const { id } = req.params;
  let { harga, provinsi } = req.body;

  const checkPrice = await Prices.findByPk(id);

  if (!checkPrice) {
    return errorResponse(res, "price not found", 404);
  }
  const schema = {
    harga: { type: "string", min: 3, max: 255 },
    provinsi: { type: "string", min: 3, max: 255 },
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return errorResponse(res, validate, 400);
  }
  if (!harga.match(/^\d*(\.\d+)?$/)) {
    return errorResponse(res, "harga is'n number!", 400);
  }
  harga = parseInt(harga);
  try {
    const inserted = {
      harga,
      provinsi,
    };
    await checkPrice.update(inserted);
    return successResponse(res, inserted, "success", 201);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

export const deletePrice = async (req, res) => {
  const { id } = req.params;

  const price = await Prices.findByPk(id);

  if (!price) {
    return errorResponse(res, "price not found", 404);
  }

  try {
    await price.destroy(id);
    return successResponse(res);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};
