import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MockAPI } from "../../axios";

export const fetchOrder = createAsyncThunk(
  "order/fetchOrder",
  async (userId, thunkAPI) => {
    try {      
      const response = await MockAPI.Order.getOrder(userId);            
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error receiving order");
    }
  }
)

const initialState = {
  orders: {},
  isLoading: false,
  error: ""
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export default orderSlice.reducer;