import { IHasFormatter } from "../interfaces/IHasFormatter";
import { IProduct } from "../interfaces/IProduct";

/**
 * ProductTypes enum
 */
export enum ProductTypes {
  FOOD,
  ELECTRONICS,
  CLOTHES,
}

/**
 * Product class
 */
export class Product implements IProduct, IHasFormatter {
  // Product attributes
  private _name: string;
  private _descripion: string;
  private _price: number;
  private _quantity: number;
  private _productType: ProductTypes;

  /**
   * Product constructor
   * @param name name of product.
   * @param description description of product.
   * @param price price of product.
   * @param quantity quantity of product.
   * @param productType product type [FOOD, ELECTRONICS, CLOTHES]
   */
  public constructor(
    name: string,
    description: string,
    price: number,
    quantity: number,
    productType: ProductTypes
  ) {
    this._name = name;
    this._descripion = description;
    this._price = price;
    this._quantity = quantity;
    this._productType = productType;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get description(): string {
    return this._descripion;
  }

  public set description(description: string) {
    this._descripion = description;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    this._price = price;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public set quantity(quantity: number) {
    this._quantity = quantity;
  }

  public get productType(): ProductTypes {
    return this._productType;
  }

  public set productType(productType: ProductTypes) {
    this._productType = productType;
  }

  /**
   * format
   * @returns A description for the specified product with all of its attributes.
   */
  public format(): string {
    return `${this.name}: ${this._descripion}. It costs: ${this._price} and have ${this._quantity} items and its type is ${this._productType}`;
  }
}
