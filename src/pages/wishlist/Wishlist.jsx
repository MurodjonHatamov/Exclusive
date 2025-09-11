import React, { useState } from 'react'
import "./Wishlist.css"
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import ProdactCard from '../../components/prodactCard/ProdactCard';
function Wishlist({wishlistData,setModalActiv,  wishlistDataFunk,      getData}) {
const [likes,setLikes]=useState(true)






  return (
    <div className='container wishlist'>
<div className="wishlist-cards">
{
  wishlistData && wishlistData.length > 0 ? (
    wishlistData.map((item, index) => (
      <ProdactCard       getData={getData}   wishlistDataFunk={wishlistDataFunk} likes={likes} setModalActiv={setModalActiv} key={index} item={item} />
    ))
  ) : (
    <div className="loader-wishlist">
      <img src="/public/imgs/wishlist.png" alt="wishlist" />
      <h3>Sevimli mahsulotlar yo'q</h3>
      <p>Mahsulotdagi <FaHeart className='FaHeart'/> belgisi bilan qo'shing️</p>
    </div>
  )
}

        </div>

    </div>
  )
}

export default Wishlist