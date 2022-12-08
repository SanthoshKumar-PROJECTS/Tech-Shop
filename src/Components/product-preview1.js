import React, {Component} from 'react';

class ProductPreview1 extends Component{
    render(){
        return(
            <div>
                <div class="single-wid-product">
                            <a href="single-product.js"><img src={require("../img/product-thumb-3.jpg")} alt=""
                                    class="product-thumb"/></a>
                            <h2><a href="single-product.js">Asus TUF F15</a></h2>
                            <div class="product-wid-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product-wid-price">
                                <ins>$400.00</ins> <del>$425.00</del>
                            </div>
                        </div>

                        <div class="single-wid-product">
                            <a href="single-product.js"><img src={require("../img/product-thumb-1.jpg")} alt=""
                                    class="product-thumb"/></a>
                            <h2><a href="single-product.js">iPhone 7 pro</a></h2>
                            <div class="product-wid-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product-wid-price">
                                <ins>$400.00</ins> <del>$425.00</del>
                            </div>
                        </div>

                        <div class="single-wid-product">
                            <a href="single-product.js"><img src={require("../img/product-thumb-4.jpg")} alt=""
                                    class="product-thumb"/></a>
                            <h2><a href="single-product.js">Sony Smart TV - 2019</a></h2>
                            <div class="product-wid-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product-wid-price">
                                <ins>$400.00</ins> <del>$425.00</del>
                            </div>
                        </div>

                        <div class="single-wid-product">
                            <a href="single-product.js"><img src={require("../img/product-thumb-2.jpg")} alt=""
                                    class="product-thumb"/></a>
                            <h2><a href="single-product.js">Samsung galaxy notebook 6</a></h2>
                            <div class="product-wid-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product-wid-price">
                                <ins>$400.00</ins> <del>$425.00</del>
                            </div>
                        </div>
            </div>
            )
        }
    }
    
    export default ProductPreview1;