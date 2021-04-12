import { Product } from "../models/Product";

/**
 * Transaction interface
 */
export interface ITransaction {
  id: string;
  products: Product[];
  refunded: boolean;
}
