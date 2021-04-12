import { Document } from "mongoose";
import { ProductTypes } from "../models/Product";

export interface IProductDoc extends Document {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  productType: ProductTypes;
}
