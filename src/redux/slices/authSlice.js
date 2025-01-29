import { createSlice } from "@reduxjs/toolkit";

const loadUserData = () => {
  const storedUserData = sessionStorage.getItem("userData");
  return storedUserData ? JSON.parse(storedUserData) : null;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    status: loadUserData() ? true : false,
    userData: loadUserData(),
  },

  reducers: {
    loginStart(state) {
      state.loading = true;
    },

    loginSuccess(state, action) {
      state.loading = false;
      state.status = true;
      state.userData = action.payload;
      sessionStorage.setItem("userData", JSON.stringify(action.payload));
    },

    loginFailure(state) {
      state.loading = false;
      state.status = false;
      state.userData = null;
      sessionStorage.removeItem("userData");
    },

    logout(state) {
      state.status = false;
      state.userData = null;
      sessionStorage.removeItem("userData");
    },
  }

})

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;