/**
 * Product interface
 */
export interface IProduct {
  name: string;
  description: string;
  price: number;
  quantity: number;
  /**
   * format
   * @returns A description for the specified product with all of its attributes.
   */
  format(): string;
}
