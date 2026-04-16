import React, { useEffect, useState } from 'react';
import "./Categories.css";
import ProdactCard from '../../components/prodactCard/ProdactCard';
import { useParams } from 'react-router-dom';
import SkletonComponents from "../../components/skleton/SkletonComponents";
import { useScrollToTop } from "../../hooks/useScrollToTop";

function Categories({ getData, wishlistDataFunk, setModalActiv,wishlistData }) {
  
  
  useScrollToTop();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getCategory = () => {
    setLoading(true);
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(`https://ecommercev01.pythonanywhere.com/product/list/?category_id=${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
        setLoading(false);
     
        
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getCategory();
  }, [id]);

  return (
    <div className="categories">
      <div className="container">
        <h1>
          <span className="title-bar"></span>
          {products[0]?.category?.title || "Yuklanmoqda..."}
        </h1>
        
        {loading ? (
          <div className="prodactCards">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className="skeleton-card">
                <SkletonComponents variant="rectangular" width="100%" height="200px" />
                <SkletonComponents variant="text" width="80%" />
                <SkletonComponents variant="text" width="60%" />
                <SkletonComponents variant="text" width="40%" />
              </div>
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className="prodactCards">
          {
            products?.map((item)=>{
         
              
              const isLiked = wishlistData?.some((wishItem) => wishItem?.id === item?.id);
       
              
              return (
                <ProdactCard
                setModalActiv={setModalActiv}
                wishlistDataFunk={wishlistDataFunk}
                getData={getData}
                key={item.id}
              
                item={{...item, is_liked: isLiked}}
              />
              )
            })
          }
            
          
          </div>
        ) : (
          <div className="empty-category">
            <h2>Bu kategoriyada mahsulotlar yo'q</h2>
            <p>Tez orada mahsulotlar qo'shiladi</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Categories;
