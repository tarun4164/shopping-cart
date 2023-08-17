import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavItems } from "../../store/cart-slice";
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    const dispatch=useDispatch()
   const handleFavItem = ()=> {
    dispatch(toggleFavItems())
   }
  return (
    <>
      <header className="header">
        <Link className="nav-link"to="/">Beared Oil For Men's</Link>
        <div className="nav-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/favourite">Fav Items</Link>
        </div>
      </header>
    </>
  );
};
export default Header;
