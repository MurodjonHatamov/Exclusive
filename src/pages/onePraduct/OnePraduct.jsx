import React, { useEffect, useState } from "react";
import "./OnePraduct.css";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { BsArrowRepeat } from "react-icons/bs";
import ProdactCard from "../../components/prodactCard/ProdactCard";
import ButtonOne from "../../components/Buttons/ButtonOne";
import SkletonComponents from "../../components/skleton/SkletonComponents";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useScrollToTop } from "../../hooks/useScrollToTop";

function OnePraduct({ data, setModalActiv,getData,wishlistDataFunk, addToCart }) {
  useScrollToTop();
  const [count, setCount] = useState(1);
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [oneProduct, setOneProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [productId, setProductId] = useState(id);
  
  
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    if (count != 1) {
      setCount(count - 1);
    }
  };


  const ProductData = () => {
    setLoading(true);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://ecommercev01.pythonanywhere.com/product/detail/?product_id=${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setOneProduct(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };


  const handleAddToCart = () => {
    addToCart(productId, count, color, size);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);



  useEffect(() => {
    setMainImg(oneProduct?.pictures[0].file);
  }, [oneProduct]);


  useEffect(() => {
    ProductData();
  }, [id]);
  return (
    <>
      <div className="onePraduct">
        <div className="container">
          {loading ? (
            <div className="onePraduc_cards">
              <div className="onePraduc_imgs4">
                <SkletonComponents variant="rectangular" width="120px" height="110px" />
                <SkletonComponents variant="rectangular" width="120px" height="110px" />
                <SkletonComponents variant="rectangular" width="120px" height="110px" />
              </div>
              <div className="onePtaduc_imgs">
                <SkletonComponents variant="rectangular" width="450px" height="400px" />
              </div>
              <div className="onePraduct_card">
                <SkletonComponents variant="text" width="80%" height="30px" />
                <SkletonComponents variant="text" width="50%" />
                <SkletonComponents variant="text" width="60%" />
                <SkletonComponents variant="text" width="90%" />
                <SkletonComponents variant="rectangular" width="100%" height="80px" />
                <SkletonComponents variant="rectangular" width="100%" height="50px" />
                <SkletonComponents variant="rectangular" width="200px" height="50px" />
              </div>
            </div>
          ) : (
            <>
              

              <div className="onePraduc_cards">
                <div className="onePraduc_imgs4">
                  {oneProduct?.pictures?.map((item, index) => {
                    return (
                      <img
                        key={index}
                        onClick={() => {
                          setMainImg(item?.file);
                        }}
                        src={`https://ecommercev01.pythonanywhere.com/${item?.file}`}
                        alt=""
                      />
                    );
                  })}
                </div>
                <div className="onePtaduc_imgs">
                  <img
                    src={`https://ecommercev01.pythonanywhere.com/${mainImg}`}
                    alt=""
                  />
                </div>
                <div className="onePraduct_card">
                  <h2>{oneProduct?.title}</h2>
                  <div className="one_stars">
                    <div className="stars001">
                      <FaStar className="stars01" />
                      <FaStar className="stars01" />
                      <FaStar className="stars01" />
                      <FaStar className="stars01" />
                      <FaStar className="stars01" />
                    </div>
                    <span>({oneProduct?.review_quantity} ta sharh)</span>
                    <p>Mavjud</p>
                  </div>
                  {oneProduct?.price != oneProduct?.discount_price ? (
                    <>
                      <h3>
                        <del>{oneProduct?.price}$</del>
                      </h3>
                      <h2>{oneProduct?.discount_price}$</h2>
                    </>
                  ) : (
                    <h3>{oneProduct?.price}$</h3>
                  )}

                  <p className="oneText">{oneProduct?.description}</p>
                  <p className="border_B"></p>
                  <div className="one_colors">
                    <h3>Ranglar:</h3>
                    {oneProduct?.properties?.color?.map((item, index) => {
                      return (
                        <p
                          className={activeColor === item ? "activColor" : ""}
                          onClick={() => {
                            setActiveColor(item);
                            setColor(item);
                          }}
                          key={index}
                          style={{ background: item }}
                        ></p>
                      );
                    })}
                  </div>
                  <div className="oneSize">
                    <h3>O'lcham:</h3>
                    {oneProduct?.properties?.size?.map((item, index) => {
                      return (
                        <span
                          className={activeSize === item ? "activSize" : ""}
                          onClick={() => {
                            setActiveSize(item);
                            setSize(item);
                          }}
                          key={index}
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                  <div className="one_buy">
                    <div className="pilus_minus">
                      <span onClick={minus}>-</span>
                      <p>{count}</p>
                      <span onClick={plus}>+</span>
                    </div>
                    <ButtonOne
                      title="Xarid qilish"
                      onClick={handleAddToCart}
                    />
                    <div className="one_heart">
                      <FaRegHeart className="one_hear01" />
                    </div>
                  </div>
                  <div className="oneFree">
                    <div className="one_cart01">
                      <TbTruckDelivery className="delivery" />
                      <div>
                        <h4>Bepul yetkazib berish</h4>
                        <p>Yetkazib berish uchun pochta kodini kiriting</p>
                      </div>
                    </div>
                    <hr />

                    <div className="one_cart01">
                      <BsArrowRepeat className="delivery" />
                      <div>
                        <h4>Qaytarish</h4>
                        <p>30 kun ichida bepul qaytarish. Batafsil</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="one_block01">
            <div className="oneBox">
              <p></p>
              <h2>O'xshash mahsulotlar</h2>
            </div>
            <div className="prodactCards">
              <Swiper
                loop={false}
                spaceBetween={30}
                slidesPerView={4}
                centeredSlides={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {data?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <ProdactCard item={item} setModalActiv={setModalActiv} getData={getData} wishlistDataFunk={wishlistDataFunk}/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnePraduct;
