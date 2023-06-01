/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import Validator from "fastest-validator";
import Tengkulaks from "../models/TengkulaksModel.js";
import { errorResponse, successResponse } from "../config/Response.js";

const v = new Validator();

export const getTengkulaks = async (req, res) => {
  try {
    const tengkulaks = await Tengkulaks.findAll();
    return successResponse(res, tengkulaks);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

export const getTengkulakById = async (req, res) => {
  try {
    const { id } = req.params;
    const tengkulak = await Tengkulaks.findByPk(id);
    if (!tengkulak) {
      return errorResponse(res, "tengkulak not found", 404);
    }
    return successResponse(res, tengkulak);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

export const createTengkulak = async (req, res) => {
  const { nama, alamat, no } = req.body;
  const schema = {
    nama: { type: "string", min: 3, max: 255},
    alamat: { type: "string", min: 3, max: 255 },
    no: { type: "string", min: 3, max: 12 }
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return errorResponse(res, validate, 400);
  }
  if (!no.match(/^\d*(\.\d+)?$/)) {
    return errorResponse(res, "nomor is'n number!", 400);
  }
  no = parseInt(no);
  try {
    const inserted = {
      nama,
      alamat,
      no,
    };
    await Tengkulaks.create(inserted);
    return successResponse(res, inserted, "success", 201);
  } catch (error) {
    console.log(error);
    return errorResponse(res);
  }
};

export const updateTengkulak = async (req, res) => {
  const { id } = req.params;

  const checkTengkulak = await Tengkulaks.findByPk(id);

  if (!checkTengkulak) {
    return errorResponse(res, "tengkulak not found", 404);
  }

  const schema = {
    nama: { type: "string", min: 3, max: 255},
    alamat: { type: "string", min: 3, max: 255 },
    no: { type: "string", min: 3, max: 12 }
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return errorResponse(res, validate, 400);
  }
  await checkTengkulak.update(req.body);
  return successResponse(res, req.body, "success", 201);
};

export const deleteTengkulak = async (req, res) => {
  const { id } = req.params;

  const tengkulak = await Tengkulaks.findByPk(id);

  if (!tengkulak) {
    return errorResponse(res, "tengkulak not found", 404);
  }
  await tengkulak.destroy(id);
  return successResponse(res);
};
