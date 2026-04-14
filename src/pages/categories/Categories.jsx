import React, { useEffect, useState } from 'react';
import "./Categories.css";
import ProdactCard from '../../components/prodactCard/ProdactCard';
import { useParams } from 'react-router-dom';

function Categories({ getData , wishlistDataFunk,setModalActiv}) {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  const getCategory = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(`https://ecommercev01.pythonanywhere.com/product/list/?category_id=${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
    
      })
      .catch((error) => console.error(error));
  };


  
  useEffect(() => {
    getCategory();
  }, [id]); 

  return (
    <div className="categories">
      <div className="container">
        <h1>
          Kategoriya: {products[0]?.category?.title || "Yuklanmoqda..."}
        </h1>
        <div className="prodactCards">
          {products?.map((item) => (
            <ProdactCard      setModalActiv={setModalActiv}       wishlistDataFunk={wishlistDataFunk}  getData={getData}  key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
