import mongoose from "mongoose";
import { IModel } from "../interfaces/IModel";
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

transactionSchema.statics.build = (attr: ITransaction) => {
  return new TransactionModel(attr);
};

const TransactionModel = mongoose.model<any, IModel<ITransaction>>(
  "Transaction",
  transactionSchema
);

export { TransactionModel };
