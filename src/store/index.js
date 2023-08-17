import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import searchReducer from "./search-slice";
import productReducer from "./product-slice";
import userSaga from "./product-saga";
import cartReducer from "./cart-slice";
const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    input: searchReducer,
    product: productReducer,
    cart:cartReducer
  },
  middleware: () => [saga],
});
saga.run(userSaga);
export default store;
