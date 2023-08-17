import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/nav/header';
import SearchBar from './components/search/Search';
import Products from './components/product/products';
import Cart from './components/cart/Cart';
import './App.css';
import { getFetchProducts } from "./store/product-slice";
import Pagination from "./components/pagination/pagination";
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector((store) => store.product.products);
  // const toggleCart = useSelector((store) => store.cart.toggle)
  const userinput = useSelector((store) => store.input.userinput)
  const dispatch = useDispatch();
  const beersPerPage = 6;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastBeer = currentPage * beersPerPage;
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
  const currentBeers = products.slice(indexOfFirstBeer, indexOfLastBeer);

  useEffect(() => {
    dispatch(getFetchProducts());
  }, []);
  
  const filterProducts = currentBeers.filter((product) => {
    return product?.name.toLowerCase().includes(userinput.toLowerCase())
  })

  const Home = () => {
    return (
      <>
        <SearchBar />
        <Products products={filterProducts.length > 0 ? filterProducts : currentBeers} />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(products.length / beersPerPage)}
          onPageChange={paginate}
        />
      </>
    )
  }

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favourite" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
