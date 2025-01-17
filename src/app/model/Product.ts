import { Category } from './Category';

export class Product {
  /*id?: number;
  name: string;
  price: number;
  category?: Category;
  //category: { id: number };

  constructor(
    name: string = '',
    price: number = 0,
    category: Category = { id: 0, name: '' }
  ) {
    this.name = name;
    this.price = price;
    this.category = category;
} ) */

  id?: number;
  name: string;
  price: number;
  category: Category;

  constructor(
    name: string = '',
    price: number = 0,
    category: Category = new Category()
  ) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}
