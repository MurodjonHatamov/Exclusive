import React, { useState, useEffect } from 'react'
import { IoClose } from 'react-icons/io5';
import "./ModalProduct.css"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ButtonOne from '../Buttons/ButtonOne';
import SkletonComponents from '../skleton/SkletonComponents';
function ModalProduct({modalActiv,setModalActiv,cartData, addToCart}) {
const [activeColor,setActiveColor]=useState(null)
const [activeSize,setActiveSize]=useState(null)
const [quantity, setQuantity] = useState(1);
const [size,setSize]=useState(null)
const [color,setColor]=useState(null)
const [productId,setProductId]=useState(modalActiv?.id)


useEffect(() => {
  setProductId(modalActiv?.id);
  setActiveColor(null);
  setActiveSize(null);
  setColor(null);
  setSize(null);
  setQuantity(1);
}, [modalActiv]);

const handleAddToCart = () => {
  const hasColor = modalActiv?.properties?.color?.length > 0;
  const hasSize = modalActiv?.properties?.size?.length > 0;
  
  if ((hasColor && !color) || (hasSize && !size)) {
    toast.error("Iltimos, rang va o'lchamni tanlang");
    return;
  }
  
  addToCart(productId, quantity, color, size);
  setModalActiv(null);
};



  return (
    <div className={modalActiv ? "active Modal":"Modal"}>

<div className="modalOverlay" onClick={() => setModalActiv(null)}>
  <div className="modalCard"  onClick={(e) => e.stopPropagation()}>
    <div onClick={()=>{
      setModalActiv(false)
    }} className="modalClose">
    <IoClose/>
    </div>
    <div className="modalImage">
      {modalActiv?.loading ? (
        <>
          <SkletonComponents variant="rectangular" width="300px" height="260px" />
          <SkletonComponents variant="rectangular" width="140px" height="40px" />
        </>
      ) : (
        <>
          <img src={`https://ecommercev01.pythonanywhere.com${modalActiv?.pictures?.[0]?.file}`} alt="" />
          <Link to={`/onePraduct/${modalActiv?.id}`}> 
            <button onClick={()=>{
              setModalActiv(null)
            }}>Batafsil malumot</button>
          </Link>
        </>
      )}
    </div>
    <div className="modalTitle">
      {modalActiv?.loading ? (
        <>
          <SkletonComponents variant="text" width="80%" />
          <SkletonComponents variant="text" width="60%" />
          <SkletonComponents variant="rectangular" width="100%" height="50px" />
          <SkletonComponents variant="rectangular" width="100%" height="50px" />
        </>
      ) : (
        <>
          <h1>{modalActiv?.title}</h1>

      {modalActiv?.properties?.color?.length > 0 && (
        <>
          <h3>Rang</h3>
          <div className="colors">
            {modalActiv?.properties?.color?.map((item, index) => {
              return (
                <span 
                  className={activeColor === item ? "activColor" : ""} 
                  onClick={() => {
                    setColor(item)
                    setActiveColor(item)
                  }} 
                  key={index} 
                  style={{ backgroundColor: item }}
                />
              );
            })}
          </div>
        </>
      )}

      {modalActiv?.properties?.size && modalActiv?.properties?.size?.length > 0 && (
        <>
          <h3>O'lcham</h3>
          <div className="sizes">
            {modalActiv?.properties?.size?.map((item, index) => {
              return (
                <span  
                  className={activeSize === item ? "activSize" : ""} 
                  onClick={() => {
                    setSize(item)
                    setActiveSize(item)
                  }} 
                  key={index}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </>
      )}

      <h3>Soni</h3>
      <div className="count">
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>

      <div className="price-section">
        {modalActiv?.price !== modalActiv?.discount_price ? (
          <>
            <span className="current-price">{modalActiv?.discount_price}$</span>
            <span className="old-price">{modalActiv?.price}$</span>
          </>
        ) : (
          <span className="current-price">{modalActiv?.price}$</span>
        )}
      </div>

      <div className="modal-buttons">
        <ButtonOne 
          title="Savatga qo'shish" 
          onClick={handleAddToCart}
        />
      </div>
        </>
      )}
    </div>
  </div>
</div>


    </div>
  )
}

export default ModalProduct
