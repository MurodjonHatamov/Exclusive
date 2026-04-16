import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

import IconButtonWithBadge from "../iconButtonWithBadge/IconButtonWithBadge";
import AcauntMenu from "../acauntMenu/AcauntMenu";
function Navbar({ user, getUser, cartCount, wishlistData, setSearchData, setCartList, setWishlistData, setCartCount}) {
  const [cartLength, setCartLength] = useState(0);



  useEffect(() => {
    if (cartCount?.cart_items?.length >= 0) {
      setCartLength(cartCount.cart_items.length);
    }
  }, [cartCount]);


const links = [
  { name: "Bosh sahifa", path: "/" },
  { name: "Bog'lanish", path: "/contact" },
  { name: "Biz haqimizda", path: "/about" },
  { name: "Ro'yxatdan o'tish", path: "/signUp" },
]


  return (
    <nav className="navbar-fixed">
      
      <div className="nav2">
        <div className="container">
          <Link to={"/"}>
            <h2 className="logo">Exclusive</h2>
          </Link>
          <ul className="nav2_ul">
         {
          links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
              >
                {link.name}
              </NavLink>
            </li>
          ))
         }
          </ul>
          <div className="nav-actions">
            <div className="nav_search-box">
              <input onInput={(e)=>{
              //  setSearchData(e.target.value);
                
              }} type="text" placeholder="Nima qidiryapsiz?" />
              <IoSearch className="IoSearch" />
            </div>



            <Link to={"/wishlist"}>
               <IconButtonWithBadge number={wishlistData?.length} icon={ <MdFavoriteBorder />} />
            </Link>

            <Link to={"/cartPage"}>
 <IconButtonWithBadge number={cartLength} icon={  <BsCart2 />} />
            </Link>


            {user?.id && (
            <AcauntMenu getUser={getUser} setCartList={setCartList} setWishlistData={setWishlistData} setCartCount={setCartCount}/>  
            )}




          </div>
        </div>
      </div>
     
    </nav>
  );
}

export default Navbar;
