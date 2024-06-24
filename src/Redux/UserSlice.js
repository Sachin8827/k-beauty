import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isLoggedIn: false,
    cartMessage: undefined,
    buyNowProduct: undefined,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logOut: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    getCart: (state, action) => {
      state.cart = state.user.cart;
    },
    addToCart: (state, action) => {
      if (!state.user.cart) {
        state.user.cart = [];
      }
      const existingItem = state.user.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        state.cartMessage = `Item added`;
      } else {
        state.user.cart.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
        state.cartMessage = "Item added";
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
    removeCartItem: (state, action) => {
      state.user.cart.splice(action.payload, 1);
    },
    buyNow: (state, action) => {
      state.buyNowProduct = action.payload;
    },
    setNullProduct: (state, action) => {
      state.buyNowProduct = undefined;
    },
    setAddress: (state, action) => {
      console.log(action.payload);
      state.user.street = action.payload.values.street;
      state.user.city = action.payload.values.city;
    },
  },
});
export const {
  setAddress,
  setUser,
  clearUser,
  addToCart,
  updateQuantity,
  removeCartItem,
  logOut,
  buyNow,
  setNullProduct,
} = userSlice.actions;
export default userSlice.reducer;
