import { createSlice } from "@reduxjs/toolkit";

const searchSice = createSlice({
  name: "search",
  initialState: {
    userinput: "",
  },
  reducers: {
    setUserSearchInput: (state, action) => {
      state.userinput = action.payload
    },
  },
});

export const { setUserSearchInput } = searchSice.actions;
export default searchSice.reducer;
