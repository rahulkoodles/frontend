import { createSlice } from "@reduxjs/toolkit";

const storedWalletAddress = localStorage.getItem('walletAddress');

const initialState = {
  WalletAddress: storedWalletAddress || '',
};

console.log("wallet address", initialState);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setWalletAddress: (state, action) => {
      state.WalletAddress = action.payload;
    },
  },
});

export const { setWalletAddress } = authSlice.actions;
export default authSlice.reducer;
