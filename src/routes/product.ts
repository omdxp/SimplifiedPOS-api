import { IRouter, Router, Request, Response } from "express";
import { IProduct } from "../interfaces/IProduct";
import { ProductModel } from "../models/ProductSchema";

const router: IRouter = Router();

// add produt route
router.post("/add-product", async (req: Request, res: Response) => {
  console.log("Adding a product...");
  const {
    id,
    name,
    description,
    price,
    quantity,
    productType,
  }: IProduct = req.body;
  const product = ProductModel.build({
    id,
    name,
    description,
    price,
    quantity,
    productType,
  });
  await product.save();
  return res.status(201).send(product);
});

// delete a product route
router.get("/delete-product", (req: Request, res: Response) => {
  console.log("Deleting a product...");
  res.send("Product has been deleted!");
});

export { router as productRouter };
