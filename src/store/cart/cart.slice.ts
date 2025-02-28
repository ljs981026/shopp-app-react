import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MockAPI } from "../../axios";
import { IProduct } from "../products/product.types";
import { IOrder } from "../order/order.types";

export const postOrder = createAsyncThunk(
  "cart/postOrder",
  async (order: CartState, thunkAPI) => {
    try {
      await MockAPI.Order.postOrder(order);
      return thunkAPI.dispatch(sendOrder());
    } catch (error) {
      return thunkAPI.rejectWithValue("Error sending order");
    }
  }
)

export type CartState = {
  products: IProduct[];
  totalPrice: number;
  userId: string;
}

const initialState: CartState = {
  products: localStorage.getItem('cartProducts') ? JSON.parse(localStorage.getItem('cartProducts') || "") : [],
  totalPrice: 0,
  userId: localStorage.getItem('userId') ? JSON.parse(localStorage.getItem('userId') || "") : "",
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
      localStorage.setItem('userId', JSON.stringify(state.userId));
    },
    removeUserId: (state) => {
      state.userId = "";
      localStorage.setItem('userId', JSON.stringify(state.userId));
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.products.push({
        ...action.payload,
        quantity: 1,
        total: action.payload.price
      })
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((item) => item.id !== action.payload)
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },
    incrementProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((item) => 
        item.id === action.payload 
        ? {
          ...item,
          quantity: item.quantity + 1,
          total: item.price * (item.quantity + 1)
        }
        : item
      )
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },
    decrementProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((item) => 
        item.id === action.payload 
        ? {
          ...item,
          quantity: item.quantity - 1,
          total: item.price * (item.quantity - 1)
        } 
        : item
      )
      localStorage.setItem('cartProducts', JSON.stringify(state.products));      
    },
    getTotalPrice: (state) => {
      state.totalPrice = state.products.reduce(
        (acc, item) => (acc += item.total),
        0
      )
      return state;
    },
    sendOrder: (state) => {
      state.products = [];
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    }
  },  
})

export const {
  setUserId,
  removeUserId,
  addToCart,
  deleteFromCart,
  incrementProduct,
  decrementProduct,
  getTotalPrice,
  sendOrder
} = cartSlice.actions;

export default cartSlice.reducer;