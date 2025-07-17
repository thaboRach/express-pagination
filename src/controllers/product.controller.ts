import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

const getProductById = async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  res.status(200).json(product);
};

const getProducts = async (req: Request, res: Response) => {
  const page = Number(req.query.page ?? "1");
  const limit = Number(req.query.limit ?? "10");
  const offset = (page - 1) * limit;

  const products = await prisma.product.findMany({ skip: offset, take: limit });
  const total = await prisma.product.count();
  const pages = Math.ceil(total / limit);
  const isLastPage = page === pages;

  res.status(200).json({ page, limit, total, pages, isLastPage, products });
};

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const newProduct = await prisma.product.create({
    data: {
      name: product.name,
      price: product.price,
    },
  });

  res.status(201).json({ message: "Product created", product: newProduct });
};

export { getProducts, getProductById, createProduct };
