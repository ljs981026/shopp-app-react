import { IProduct } from "../products/product.types";

export interface IOrder {
  id: string;
  userId: string;
  totalPrice: number;
  products: IProduct[]
}