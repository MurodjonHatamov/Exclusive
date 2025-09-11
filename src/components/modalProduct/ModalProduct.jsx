import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import "./ModalProduct.css"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
function ModalProduct({modalActiv,setModalActiv}) {
const [activeColor,setActiveColor]=useState(null)
const [activeSize,setActiveSize]=useState(null)

  const [quantity, setQuantity] = useState(1);

const [size,setSize]=useState(null)
const [color,setColor]=useState(null)
const [productId,setProductId]=useState(modalActiv?.id)

const addToCart = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem("ShopToken")}`);

  let bodyData = {
    product_id: productId,
    quantity: quantity
  };

  if (color || size) {
    bodyData.properties = {};
    if (color) bodyData.properties.color = color;
    if (size) bodyData.properties.size = size;
  }

  const raw = JSON.stringify(bodyData);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("https://ecommercev01.pythonanywhere.com/order/add-to-cart/", requestOptions)
    .then((response) => response.text())
    .then((result) => {
   
      toast.success("Mahsulot savatga qo'shildi");
    })
    .catch((error) => console.error(error));
};



  return (
    <div className='ModalProduct'>
<div className="container">
<div className={modalActiv?"active Modal":"Modal"}>
  <div className="modalCard">
    <div onClick={()=>{
      setModalActiv(false)
    }} className="modalClose">
    <IoClose/>
    
    </div>
    <div className="modalImage">
      <img src={`https://ecommercev01.pythonanywhere.com${modalActiv?.pictures[0]?.file}`} alt="" />
     
      <Link to={`/onePraduct/${modalActiv.id}`}> 
      <button onClick={()=>{
        setModalActiv(null)
      }}>Read more</button>
      </Link>
    </div>
    <div className="modalTitle">
      <h1>{modalActiv.title}</h1>
<h3>Color</h3>
<div className="colors">
{modalActiv?.properties?.color?.map((item, index) => {
  return <span className={activeColor === item ? "activColor" :""} onClick={()=>{
setColor(item)
setActiveColor(item)
  }} key={index} style={{ backgroundColor: item }}></span>;
})}

</div>
{modalActiv?.properties?.size && <><h3>Size</h3>
<div className="sizes">
{modalActiv?.properties?.size?.map((item, index) => {
  return <span  className={activeSize === item ? "activSize" : ""} onClick={()=>{
    setSize(item)
    setActiveSize(item)
      }} key={index}>{item}</span>;
})}
 
</div>
</>
}
<h3>Quantity:1</h3>
<div className="count">
  <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
  <span>{quantity}</span>
  <button onClick={() => setQuantity(q => q + 1)}>+</button>
</div>
<h3>
Price: {modalActiv?.price!=modalActiv?.discount_price?(<>
  <span>{modalActiv?.discount_price}$</span>
            <del>
                {modalActiv?.price}$
                </del>

              
              </>):   <span>{modalActiv?.price}$</span>}

</h3>
<button onClick={()=>{
  addToCart()
  setModalActiv(null)
}}>Add to Cart</button>
    </div>

  </div>
</div>
</div>
        
    </div>
  )
}

export default ModalProduct