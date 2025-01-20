import axios from "axios";
import { IOrder } from "./store/order/order.types";
import { CartState } from "./store/cart/cart.slice";

const API_BASE_URL = "https://678a6a32dd587da7ac2a1280.mockapi.io";

export const MockAPI = {
  Order: {
    async postOrder(data: CartState) {
      return await axios.post(API_BASE_URL + '/orders', data)
    },
    async getOrder(userId: string) {      
      return await axios.get<IOrder[]>(API_BASE_URL + `/orders?search=${userId}`)
    },
  }
}