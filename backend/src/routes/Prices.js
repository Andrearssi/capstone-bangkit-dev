/* eslint-disable linebreak-style */
import express from "express";
import {
  getPrices,
  getPricesById,
  createPrice,
  updatePrice,
  deletePrice,
} from "../controllers/Prices.js";
import verifyToken from "../middleware/verifyToken.js";

const pricesRouter = express.Router();

pricesRouter.get("/", getPrices);
pricesRouter.post("/", verifyToken, createPrice);
pricesRouter.get("/:id", verifyToken, getPricesById);
pricesRouter.put("/:id", verifyToken, updatePrice);
pricesRouter.delete("/:id", verifyToken, deletePrice);

export default pricesRouter;
