import { Category } from './Category';

export class Product {
  id?: number;
  name: string;
  price: number;
  category: { id: number }; 

  constructor(
    name: string = '',
    price: number = 0,
    categoryId: number = 0
  ) {
    this.name = name;
    this.price = price;
    this.category = { id: categoryId };
  }
}
