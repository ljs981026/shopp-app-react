import axios from "axios";

const API_BASE_URL = "https://678a6a32dd587da7ac2a1280.mockapi.io";

export const MockAPI = {
  Order: {
    async postOrder(data) {
      await axios.post(API_BASE_URL + '/orders', data)
    } 
  }
}