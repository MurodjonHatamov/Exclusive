import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder, MdOutlineCancel } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
function Navbar({ user, getUser, cartCount, wishlistData, dataCategory,setSearchData }) {
  const [cartLength, setCartLength] = useState(0);
  const [wishlistLength, setWishlistLength] = useState(0);
  const [userMenuActiv, setUserMenuActiv] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartCount?.cart_items?.length >= 0) {
      setCartLength(cartCount.cart_items.length);
    }
  }, [cartCount]);

  return (
    <nav>
      <div className="nav1">
        <div className="container">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="">ShopNow</a>
          </p>
          <select name="" id="">
            <option value="English">English</option>
            <option value="Uzb">O'zbek</option>
            <option value="Rus">Ruscha</option>
          </select>
        </div>
      </div>
      <div className="nav2">
        <div className="container">
          <Link to={"/"}>
            <h2 className="logo">Exclusive</h2>
          </Link>
          <ul className="nav2_ul">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/contact"}>
              <li>Contact</li>{" "}
            </Link>

            <Link to={"/about"}>
              {" "}
              <li>About</li>
            </Link>
            <Link to={"/signUp"}>
              {" "}
              <li>Sign Up</li>
            </Link>
          </ul>
          <div className="nav-actions">
            <div className="nav_search-box">
              <input onInput={(e)=>{
              //  setSearchData(e.target.value);
                
              }} type="text" placeholder="What are you looking for?" />
              <IoSearch className="IoSearch" />
            </div>
            <Link to={"/wishlist"}>
              <button className="nav_favorite-box">
                <MdFavoriteBorder />
                <div className="countProduct">
                  <span>{wishlistData?.length}</span>
                </div>
              </button>
            </Link>
            <Link to={"/cartPage"}>
              {" "}
              <button className="nav_cart-box">
                {cartCount && (
                  <div className="countProduct">
                    <span>{cartLength}</span>
                  </div>
                )}
                <BsCart2 />
              </button>
            </Link>
            {user?.id && (
              <div
                className={
                  userMenuActiv
                    ? "nav_user-menu activUserMenu"
                    : "nav_user-menu"
                }
              >
                <button
                  onClick={() => {
                    setUserMenuActiv(!userMenuActiv);
                  }}
                  className="nav_user-box"
                >
                  <FiUser />
                </button>
                <div className="nav_user-card">
                  <Link to={"/myAccaunt"}>
                    {" "}
                    <div
                      onClick={() => {
                        setUserMenuActiv(false);
                      }}
                      className="box-menuNav"
                    >
                      <FiUser className="boxMenu_icon" />{" "}
                      <span>Manage My Account </span>
                    </div>
                  </Link>

                  <div
                    onClick={() => {
                      setUserMenuActiv(false);
                    }}
                    className="box-menuNav"
                  >
                    <FiShoppingBag className="boxMenu_icon" />{" "}
                    <span>My Order</span>
                  </div>
                  <div
                    onClick={() => {
                      setUserMenuActiv(false);
                    }}
                    className="box-menuNav"
                  >
                    <MdOutlineCancel className="boxMenu_icon" />{" "}
                    <span>My Cancellations</span>
                  </div>
                  <div
                    onClick={() => {
                      setUserMenuActiv(false);
                    }}
                    className="box-menuNav"
                  >
                    <AiOutlineStar className="boxMenu_icon" />{" "}
                    <span>My Reviews</span>
                  </div>
                  <div
                    onClick={() => {
                      localStorage.clear();
                      getUser();
                      navigate("/");
                      setUserMenuActiv(false);
                    }}
                    className="box-menuNav"
                  >
                    <BiLogOut className="boxMenu_icon" /> <span>Logout </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="category_nav">
        <div className="container">
        {dataCategory ? (
  dataCategory.map((item, index) => (
    <NavLink
      activeClassName="active"
      key={index}
      to={`/categories/${item?.id}`}
    >
      <div className="category_nav_box">
        <img src={item?.image} alt={item?.title} />
        <span>{item?.title}</span>
      </div>
    </NavLink>
  ))
) : (
  <div className="BoxUndefined">
{
  [1,1,1,1,1,1].map((item)=>{
return     <div
style={{
  width: '130px',
  height: '30px',
  borderRadius: '30px',
}}
className="gradient-placeholder"
></div>

  })
}
    
  

  </div>
)}






        </div>
      </div>
    </nav>
  );
}

export default Navbar;
