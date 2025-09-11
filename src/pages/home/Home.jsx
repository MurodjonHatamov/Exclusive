  import React, { useEffect, useState } from "react";
  import "./Home.css";
  import { FaApple } from "react-icons/fa";
  import AOS from 'aos';
  import 'aos/dist/aos.css'; 
  // swiper import
  import { Swiper, SwiperSlide } from "swiper/react";
  import 'swiper/css';

  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import { Autoplay, Pagination, Navigation } from "swiper/modules";
  import ProdactCard from "../../components/prodactCard/ProdactCard";


import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


  function Home({ data ,setModalActiv,dataCategory, getData,wishlistDataFunk}) {

const [view,setview]=useState(true)
    


useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,    
  });
}, []);




    return (
      <div className="Home">
        <div className="hero">
          <div className="container">
            





            
          <div className="category-menu">
      <ul>
    
    
{
dataCategory ? (   dataCategory?.map((item, index) => (
  <Link key={index} to={`/categories/${item?.id}`}>   <li >
  <img src={item?.image} alt={item?.title} />
  <span>{item?.title}</span>
  <FaChevronRight className="chevron-icon" />
</li></Link>
   ))): (  <div className="BoxUndefined">
    {
      [1,1,1,1,1,1].map((item)=>{
    return     <div style={{
      width: '220px',
      height: '30px',
      
      }} className="gradient-placeholder">
      
      </div>
      })
    }
    

    </div>)
}


   
      </ul>



    </div>

            <div className="main-banners-container">
              <Swiper
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="main-banner">
                    <div className="banner-content">
                      <p  className="series">
                        <FaApple className="brand-logo" /> iPhone 14 Series
                      </p>
                      <h1 className="discount-text">Up to 10% off Voucher</h1>
                      <button className="shop-now-btn">Shop Now →</button>
                    </div>
                    <div className="banner-image">
                      <img src="/imgs/hero_img.png" alt="iPhone" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="main-banner">
                    <div className="banner-content">
                      <p className="series">
                        <FaApple className="brand-logo" /> iPhone 14 Series
                      </p>
                      <h1 className="discount-text">Up to 10% off Voucher</h1>
                      <button className="shop-now-btn">Shop Now →</button>
                    </div>
                    <div className="banner-image">
                      <img src="/imgs/hero_img.png" alt="iPhone" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="main-banner">
                    <div className="banner-content">
                      <p className="series">
                        <FaApple className="brand-logo" /> iPhone 14 Series
                      </p>
                      <h1 className="discount-text">Up to 10% off Voucher</h1>
                      <button className="shop-now-btn">Shop Now →</button>
                    </div>
                    <div className="banner-image">
                      <img src="/imgs/hero_img.png" alt="iPhone" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="main-banner">
                    <div className="banner-content">
                      <p className="series">
                        <FaApple className="brand-logo" /> iPhone 14 Series
                      </p>
                      <h1 className="discount-text">Up to 10% off Voucher</h1>
                      <button className="shop-now-btn">Shop Now →</button>
                    </div>
                    <div className="banner-image">
                      <img src="/imgs/hero_img.png" alt="iPhone" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="main-banner">
                    <div className="banner-content">
                      <p className="series">
                        <FaApple className="brand-logo" /> iPhone 14 Series
                      </p>
                      <h1 className="discount-text">Up to 10% off Voucher</h1>
                      <button className="shop-now-btn">Shop Now →</button>
                    </div>
                    <div className="banner-image">
                      <img src="/imgs/hero_img.png" alt="iPhone" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <main>
          <section className="section1">
            <div className="container">
              <span data-aos="fade-right"> 
                <img src="/imgs/scetion_svg.svg" alt="" />
                Today’s
              </span>
              <div className="discountPeriod-box">
                <h1>Flash Sales</h1>
                <div className="countdown-timer">
                  <div className="time-box">
                    <span className="label">Days</span>
                    <span className="value">03</span>
                  </div>
                  <span className="separator">:</span>
                  <div className="time-box">
                    <span className="label">Hours</span>
                    <span className="value">23</span>
                  </div>
                  <span className="separator">:</span>
                  <div className="time-box">
                    <span className="label">Minutes</span>
                    <span className="value">19</span>
                  </div>
                  <span className="separator">:</span>
                  <div className="time-box">
                    <span className="label">Seconds</span>
                    <span className="value">56</span>
                  </div>
                </div>
              </div>

              <div className="prodactCards">
                <Swiper
                    loop={false}
                  spaceBetween={30}
                  slidesPerView={4}
                  centeredSlides={false}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {data?.map((item) => (
                    <SwiperSlide key={item.id}>
                      <ProdactCard wishlistDataFunk={wishlistDataFunk} getData={getData} item={item} setModalActiv={setModalActiv}/>
                    </SwiperSlide>
                  ))}
                </Swiper>
             
              </div>
            </div>
          </section>
          <section className="section2">
            <div className="container">
              <span data-aos="fade-right">
                <img src="/imgs/scetion_svg.svg" alt="" />
                Categories
              </span>
              <h1>Browse By Category</h1>

              <div  data-aos="fade-down" className="category-boxs">
              {dataCategory?.map((item, index) => (
       <Link key={index} to={`/categories/${item?.id}`}><div  className="category-box">
      <img src={item?.image} alt="" />
       <span>{item?.title}</span>
     </div>   </Link>
        ))}
                
               
              </div>
            </div>
          </section>
          <section className="section3">
            <div className="container">
              <span data-aos="fade-right">
                <img src="/imgs/scetion_svg.svg" alt="" />
                This Month
              </span>
              <div className="best">
                <h1> Best Selling Products</h1>
          
              </div>
              <div className="prodactCards">
                <Swiper
                  loop={false}
                spaceBetween={30}
                slidesPerView={4}
                centeredSlides={false}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >
                  {data?.map((item) => (
                    <SwiperSlide key={item.id}>
                      <ProdactCard wishlistDataFunk={wishlistDataFunk} getData={getData} item={item} setModalActiv={setModalActiv}/>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>
          <section className="section4">
            <div className="container">
              <img src="/imgs/section4_img.png" alt="" />
            </div>
          </section>
          <section className="section5">
            <div className="container">
              <span data-aos="fade-right">
                <img src="/imgs/scetion_svg.svg" alt="" />
                Our Products
              </span>
              <h1>Explore Our Products</h1>
              <div className="prodactCards1">
              {data?.slice(0, view ? 8 : data.length).map((item) => (
  <ProdactCard wishlistDataFunk={wishlistDataFunk} key={item.id} getData={getData} setModalActiv={setModalActiv} item={item} />
))}

              </div>
              <button onClick={()=>{
                setview(!view)
              }}>View All Products</button>
            </div>
          </section>
          <section className="section6">
            <div className="container">
              <span data-aos="fade-right">
                <img src="/imgs/scetion_svg.svg" alt="" />
                Featured
              </span>
              <h1>New Arrival</h1>
              <div className="newArial">
                <img src="/imgs/section6_img.png" alt="" />
                <img src="/imgs/section6_img1.png" alt="" />
              </div>
            </div>
          </section>
          <section className="section7">
            <div  data-aos="fade-down" className="container">
              <div className="box7">
                <img src="/imgs/section7_svg.svg" alt="" />
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
              </div>
              <div className="box7">
                <img src="/imgs/section7_svg1.svg" alt="" />
                <h3>24/7 CUSTOMER SERVICE</h3>
                <p>Friendly 24/7 customer support</p>
              </div>
              <div className="box7">
                <img src="/imgs/section7_svg2.svg" alt="" />
                <h3>MONEY BACK GUARANTEE</h3>
                <p>We reurn money within 30 days</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  export default Home;
