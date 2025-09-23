import type {Product} from "./Product";

export interface CartItem extends Product{
  productId: string;
}