import React,{Component} from 'react';
import Home from "./Pages/index";
import Cart from "./Pages/cart";
import Check from "./Pages/checkout"
import Product from "./Pages/single-product";
import Shop from "./Pages/shop";
import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/responsive.css";
// import "./css/owl.carousel.css";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

class App extends Component{
  render(){
    return(
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/checkout" element={<Check/>}></Route>
          <Route path="/single-product" element={<Product/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
        </Routes>
      </Router>
    )
  }
}
export default App;