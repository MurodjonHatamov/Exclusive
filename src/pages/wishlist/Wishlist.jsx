import React, { useState } from 'react'
import "./Wishlist.css"
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProdactCard from '../../components/prodactCard/ProdactCard';
import ButtonOne from '../../components/Buttons/ButtonOne';
import { useScrollToTop } from '../../hooks/useScrollToTop';
function Wishlist({wishlistData,setModalActiv,  wishlistDataFunk,      getData}) {
   useScrollToTop();
const [likes,setLikes]=useState(true)
  


  return (
    <div className="wishlist">
      <div className="container">
   
        
        <div className="wishlist-cards">
          {wishlistData && wishlistData.length > 0 ? (
            wishlistData.map((item, index) => (
              <ProdactCard getData={getData} wishlistDataFunk={wishlistDataFunk} likes={likes} setModalActiv={setModalActiv} key={index} item={item} />
            ))
          ) : (
            <div className="loader-wishlist">
              <img src="/imgs/wishlist.png" alt="wishlist" />
              <h3>Sevimli mahsulotlar yo'q</h3>
              <p>Mahsulotdagi <FaHeart className='FaHeart'/> belgisi bilan qo'shing</p>
<br />
              <Link to="/" > <ButtonOne  className="wishlist-empty-btn" title={"Do'konga o'tish"}  disableElevation variant={"contained"}/></Link>
              
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Wishlist