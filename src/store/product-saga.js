import { call, put, takeEvery } from "redux-saga/effects";
import { getProductsDataSuccessfully } from "./product-slice";

function* getProducts() {
  const response = yield call(() => fetch("https://api.punkapi.com/v2/beers"));
  if (!response.ok) {
   throw new Error('something went wrong')
  }
  const productData = yield response.json();
  console.log(productData);
  yield put(getProductsDataSuccessfully(productData));
}

function* userSaga() {
  yield takeEvery("productlist/getFetchProducts", getProducts);
}
export default userSaga;
