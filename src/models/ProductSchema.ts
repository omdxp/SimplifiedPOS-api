import mongoose from "mongoose";
import { IModel } from "../interfaces/IModel";
import { IProduct } from "../interfaces/IProduct";
import { IProductDoc } from "../interfaces/IProductDoc";
import { ProductTypes } from "./Product";

// defining product schema
const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  productType: {
    type: ProductTypes,
    required: true,
  },
});

productSchema.statics.build = (attr: IProduct) => {
  return new ProductModel(attr);
};

const ProductModel = mongoose.model<IProductDoc, IModel<IProduct, IProductDoc>>(
  "Product",
  productSchema
);

export { ProductModel };
