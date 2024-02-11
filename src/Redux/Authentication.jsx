import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const AuthenticationSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { setUser, setLoading, setError, clearError } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer
