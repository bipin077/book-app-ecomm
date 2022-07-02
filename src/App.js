import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<h1>about us</h1>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
