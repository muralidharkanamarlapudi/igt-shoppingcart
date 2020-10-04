export class Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;

  constructor(id, name, category = '', price = 0, image = '') {
    this.id = id
    this.name = name
    this.category = category
    this.price = price
    this.image = image
  }
}
