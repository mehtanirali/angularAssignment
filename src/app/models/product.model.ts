export class Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
  
    constructor(id: number, title: string, price: number, description: string, image: string, category: string) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.description = description;
      this.image = image;
      this.category = category;
    }
  }
  