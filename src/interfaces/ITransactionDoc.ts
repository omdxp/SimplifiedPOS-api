import { Document } from "mongoose";
import { Product } from "../models/Product";

export interface ITransactionDoc extends Document {
  id: string;
  products: Product[];
  refunded: boolean;
}
