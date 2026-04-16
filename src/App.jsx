import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/home/login/Login";
import About from "./pages/about/About";
import MyAcaunt from "./pages/myAcaunt/MyAcaunt";
import Contact from "./pages/contact/Contact";
import OnePraduct from "./pages/onePraduct/OnePraduct";
import CartPage from "./pages/cartPage/CartPage";
import Categories from "./pages/categories/Categories";
import { ToastContainer, toast } from "react-toastify";
import CheckOut from "./pages/checkout/CheckOut";
import ModalProduct from "./components/modalProduct/ModalProduct";
import Wishlist from "./pages/wishlist/Wishlist";
import SearchProduct from "./pages/searchProduct/SearchProduct";

function App() {
  
  const [modalActiv, setModalActiv] = useState(null);
  const [wishlistData, setWishlistData] = useState(null);
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
   const [cartList, setCartList] = useState({ loading: true });
  const [cartCount, setCartCount] = useState(null);
  const [dataCategory, setDataCategory] = useState(null);
const [searchData,setSearchData]=useState(null)


     
  // Umumiy malumot
  const getData = () => {
    const myHeaders = new Headers();
    if (localStorage.getItem("ShopToken")) {
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("ShopToken")}`
      );
    }
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://ecommercev01.pythonanywhere.com/product/list/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.error(error));
  };

  // Authorization
  const getUser = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("ShopToken")}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://ecommercev01.pythonanywhere.com/user/detail/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
      })
      .catch((error) => console.error(error));
  };

  // wishlist data
  const wishlistDataFunk = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("ShopToken")}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://ecommercev01.pythonanywhere.com/action/my-wishlist/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setWishlistData(result);
        getData();
      })
      .catch((error) => console.error(error));
  };

  const cartData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("ShopToken")}`);
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://ecommercev01.pythonanywhere.com/order/cart-items/", requestOptions)
      .then((response) => response.json()) 
      .then((result) => {
        setCartList(result)
        setCartCount(result)  
    
        
      })
      .catch((error) => console.error(error));
  }

  const addToCart = (productId, quantity, color, size) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("ShopToken")}`);

    let bodyData = {
      product_id: productId,
      quantity: quantity,
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

    fetch("https://ecommercev01.pythonanywhere.com/order/add-to-cart/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.properties) {
          toast.error("Iltimos, rang va o'lchamni tanlang");
        } else {
          toast.success("Mahsulot savatga qo'shildi");
          cartData();
        }
      })
      .catch((error) => console.error(error));
  };


  // DataCategory
  const getCategory = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://ecommercev01.pythonanywhere.com/product/categories/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setDataCategory(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
    wishlistDataFunk();
    getUser();
    getCategory();
    cartData()
  }, []);

  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={1000} />

        <Navbar
          user={user}
          getUser={getUser}
          cartCount={cartCount}
          wishlistData={wishlistData}
          dataCategory={dataCategory}
          data={data}
          setSearchData={setSearchData}
          cartData={cartData}
        setCartList={setCartList}
        setWishlistData={setWishlistData}
        setCartCount={setCartCount}
        />

     
          <ModalProduct addToCart={addToCart} cartData={cartData}  modalActiv={modalActiv} setModalActiv={setModalActiv} />
       

        <div className="app-content">
          <Routes>
          <Route
            path="/searchproduct"
            element={<SearchProduct data={data} searchData={searchData}/>}
          />
          <Route
            path="/"
            element={
              <Home
              cartData={cartData} 
                data={data}
                setModalActiv={setModalActiv}
                dataCategory={dataCategory}
                getData={getData}
                wishlistDataFunk={wishlistDataFunk}
              />
            }
          />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login getUser={getUser} wishlistDataFunk={wishlistDataFunk} cartData={cartData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckOut cartCount={cartCount} cartData={cartData} cartList={cartList}/>} />
          <Route path="/myAccaunt" element={<MyAcaunt />} />

          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlistData={wishlistData}
                data={data}
                setModalActiv={setModalActiv}
                getData={getData}
                wishlistDataFunk={wishlistDataFunk}
              />
            }
          />

          <Route
            path="/cartPage"
            element={<CartPage cartList={cartList} cartData={cartData} setCartCount={setCartCount} cartCount={cartCount}/>}
          />
          <Route
            path="/categories/:id"
            element={
              <Categories
                getData={getData}
                wishlistDataFunk={wishlistDataFunk}
                setModalActiv={setModalActiv}
                wishlistData={wishlistData} 
              />
            }
          />
          <Route
            path="/onePraduct/:id"
            element={
              <OnePraduct
                getData={getData}
                setModalActiv={setModalActiv}
                data={data}
                addToCart={addToCart}
                wishlistDataFunk={wishlistDataFunk}
              />
            }
          />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
