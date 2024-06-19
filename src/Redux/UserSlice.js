import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isLoggedIn : false,
    cartMessage : null
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logOut: (state, action) => {
      state.user = null;
      state.isLoggedIn = false
    },
    getCart: (state, action) => {
      state.cart = state.user.cart;
    },
    addToCart: (state, action) => {
      console.log(action.payload);
      if (!state.user.cart) {
        state.user.cart = [];
      }
      const existingItem = state.user.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingItem) {
          state.cartMessage = "Already added"
      } else {
        state.user.cart.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
        console.log("success");
        state.cartMessage = null;
      }
    },
    updateQuantity: (state, action) => {
      const item = state.user.cart.find(
        (item) => item.product.id == action.payload.id
      );
      if (!action.payload.num) {
        item.quantity++;
      } else if (item.quantity > 1) {
        item.quantity--;
      }
    },
    removeCartItem : (state, action) =>{
      state.user.cart.splice(action.payload, 1);
    }
  },
});
export const { setUser, clearUser, addToCart, updateQuantity, removeCartItem, logOut } =
  userSlice.actions;
export default userSlice.reducer;
