import mongoose from "mongoose";
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

export const ProductModel = mongoose.model("Product", productSchema);
