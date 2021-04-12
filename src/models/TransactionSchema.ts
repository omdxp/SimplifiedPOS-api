import mongoose from "mongoose";
import { Product } from "./Product";

// defining transaction schema
const transactionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  refunded: {
    type: Boolean,
    required: true,
  },
});

export const TransactionModel = mongoose.model(
  "Transaction",
  transactionSchema
);
