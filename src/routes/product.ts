import express from "express";
import { getProducts, getProductById, createProduct } from "../controllers";
import { validate } from "../middleware";
import { productBodySchema, productParamsSchema } from "../schemas";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", validate(productParamsSchema, "params"), getProductById);
router.post("/", validate(productBodySchema, "body"), createProduct);

export { router as productRouter };
