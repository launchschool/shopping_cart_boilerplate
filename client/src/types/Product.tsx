export interface Product {
  _id: string;
  title: string;
  quantity: number;
  price: number;
}

export interface CartItem extends Product{
  productId: string;
}