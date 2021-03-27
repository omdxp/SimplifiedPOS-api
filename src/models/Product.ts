export class Product {
  name: string;
  descripion: string;
  price: number;
  quantity: number;

  constructor(
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

  format() {
    return `${this.name}: ${this.descripion}. It costs: ${this.price} and have ${this.quantity} items`;
  }
}
