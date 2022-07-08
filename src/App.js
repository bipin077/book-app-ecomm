import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Auth/Login";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/books" element={<Products />}></Route>
          <Route path="/books" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Login />}></Route>

          <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
