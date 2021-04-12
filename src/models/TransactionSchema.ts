import mongoose from "mongoose";
import { ITransaction } from "../interfaces/ITransaction";
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

const TransactionModel = mongoose.model("Transaction", transactionSchema);

const build = (attr: ITransaction) => {
  return new TransactionModel(attr);
};

export { TransactionModel };
