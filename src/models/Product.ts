/**
 * Product class
 */
export class Product {
  // Product attributes
  private name: string;
  private descripion: string;
  private price: number;
  private quantity: number;

  /**
   * Product constructor
   * @param name name of product.
   * @param description description of product.
   * @param price price of product.
   * @param quantity quantity of product.
   */
  public constructor(
    name: string,
    description: string,
    price: number,
    quantity: number
  ) {
    this.name = name;
    this.descripion = description;
    this.price = price;
    this.quantity = quantity;
  }

  /**
   * format
   * @returns A description for the specified product with all of its attributes.
   */
  public format(): string {
    return `${this.name}: ${this.descripion}. It costs: ${this.price} and have ${this.quantity} items`;
  }
}
