import { IHasFormatter } from "../interfaces/IHasFormatter";
import { Product } from "./Product";

/**
 * Transaction class
 */
export class Transaction implements IHasFormatter {
  // Transaction attributes
  private _id: string;
  private _products: Product[];

  /**
   *
   * @param id transaction's id.
   * @param products list of products for this transaction.
   */
  constructor(id: string, products: Product[]) {
    this._id = id;
    this._products = products;
  }

  /**
   * format
   * @returns A description for the specified transaction with all of its attributes.
   */
  format(): string {
    return `Transaction with id #${this._id} have these prdocuts: ${this._products}`;
  }
}
