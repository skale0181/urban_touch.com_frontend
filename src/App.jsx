import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Home } from "../src/Components/Home";
import Mens from "../src/Components/ProductPage/Mens";
import { Womens } from "../src/Components/ProductPage/Womens";
import { Kids } from "../src/Components/ProductPage/Kids";
import { AboutUs } from "../src/Components/ProductPage/AboutUs";
import { Cart } from "./Cart_Checkout/Cart";
import { Product } from "./Components/ProductPage/Product";
import { Checkout } from "./Cart_Checkout/Checkout";
import { Payment } from "./Cart_Checkout/Payment";
import { Signup } from "./Components/Signup";
import { Login } from "./Components/Login";
import GiftCards from "../src/Components/ProductPage/GiftCards";
import LastInfo from "./Cart_Checkout/LastInfo";

function App() {
  return (
    <div className="App">
      <marquee
        behavior=""
        direction=""
        style={{
          height: "35px",
          backgroundColor: "rgb(226,164,35)",
          margin: "0px",
        }}
      >
        <div style={{paddingTop:"6px"}}>
          
          FREE INTERNATIONAL FREE SHIPPING WITH ORDERS ABOVE ₹2000
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          FREE INTERNATIONAL FREE SHIPPING WITH ORDERS ABOVE ₹2000
        </div>
      </marquee>
      <div className="nav_bar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order-summary" element={<LastInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
