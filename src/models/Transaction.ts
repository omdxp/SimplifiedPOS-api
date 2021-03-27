import { IHasFormatter } from "../interfaces/IHasFormatter";
import { ITransaction } from "../interfaces/ITransaction";
import { Product } from "./Product";

/**
 * Transaction class
 */
export class Transaction implements ITransaction, IHasFormatter {
  // Transaction attributes
  private _id: string;
  private _products: Product[];

  /**
   * Transaction constructor
   * @param id transaction's id.
   * @param products list of products for this transaction.
   */
  constructor(id: string, products: Product[]) {
    this._id = id;
    this._products = products;
  }

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get products(): Product[] {
    return this._products;
  }

  public set products(products: Product[]) {
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
