import React, { useEffect, useState } from "react";
import "./OnePraduct.css";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { BsArrowRepeat } from "react-icons/bs";
import ProdactCard from "../../components/prodactCard/ProdactCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function OnePraduct({ data, setModalActiv,getData,wishlistDataFunk }) {
  const [count, setCount] = useState(1);
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [oneProduct, setOneProduct] = useState(null);
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
      })
      .catch((error) => console.error(error));
  };


  const addToCart = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("ShopToken")}`
    );

    let bodyData = {
      product_id: productId,
      quantity: count,
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
      redirect: "follow",
    };

    fetch(
      "https://ecommercev01.pythonanywhere.com/order/add-to-cart/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        toast.success("Mahsulot savatga qo'shildi");
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);



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
          <div className="onerPraduct_text">
            <span>Hisob</span>
            <p></p>
            <span>Gaming</span>
            <p></p>
            <span>Havic HV G-92 Gamepad</span>
          </div>

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
                <span>(150 ta sharh)</span>
                <p>Mavjud</p>
              </div>
              {oneProduct?.price != oneProduct?.discount_price ? (
                <>
                  <h3>
                    <del>{oneProduct?.price}$</del>
                  </h3>
                  <h2>{oneProduct?.price}$</h2>
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
                <button
                  onClick={() => {
                    addToCart();
                  }}
                >
                  Xarid qilish
                </button>
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
