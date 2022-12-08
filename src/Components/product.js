import React, {Component} from 'react';

class Product extends Component{
    render(){
        return(
            <div>
                                <div class="single-product">
                                <div class="product-f-image">
                                    <img alt=""width="335px"src={require("../img/product-1.jpg")}/>
                                    <div class="product-hover">
                                        <a href="/" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to
                                            cart</a>
                                        <a href ="/single-product.js" class="view-details-link"><i
                                                class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>

                                <h2><a href="/single-product.js">Samsung Galaxy s5-2015</a></h2>

                                <div class="product-carousel-price">
                                    <ins>$700.00</ins> <del>$100.00</del>
                                </div>
                                </div>

                                <div class="single-product">
                                <div class="product-f-image">
                                    <img alt=""width="335px"src={require("../img/product-2.jpg")}/>
                                    <div class="product-hover">
                                        <a href="/" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to
                                            cart</a>
                                        <a href="/single-product.js" class="view-details-link"><i
                                                class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>

                                <h2><a href="/single-product.js">Nokia Lumia 1320</a></h2>

                                <div class="product-carousel-price">
                                    <ins>$899.00</ins> <del>$999.00</del>
                                </div>
                                </div>

                                <div class="single-product">
                                <div class="product-f-image">
                                    <img alt=""width="335px"src={require("../img/product-3.jpg")}/>
                                    <div class="product-hover">
                                        <a href="/" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to
                                            cart</a>
                                        <a href="/single-product.js" class="view-details-link"><i
                                                class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>

                                <h2><a href="/single-product.js">LG Leon 2015</a></h2>

                                <div class="product-carousel-price">
                                    <ins>$400.00</ins> <del>$425.00</del>
                                </div>
                                </div>

                                <div class="single-product">
                                <div class="product-f-image">
                                    <img alt=""width="335px"src={require("../img/product-4.jpg")}/>
                                    <div class="product-hover">
                                        <a href="/" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to
                                            cart</a>
                                        <a href="/single-product.js" class="view-details-link"><i
                                                class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>

                                <h2><a href="/single-product.js">Sony Xperia M8</a></h2>

                                <div class="product-carousel-price">
                                    <ins>$200.00</ins> <del>$225.00</del>
                                </div>
                                </div>

                                <div class="single-product">
                                <div class="product-f-image">
                                    <img alt=""width="330px"src={require("../img/product-5.jpg")}/>
                                    <div class="product-hover">
                                        <a href="/" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to
                                            cart</a>
                                        <a href="/single-product.js" class="view-details-link"><i
                                                class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>

                                <h2><a href="/single-product.js">iPhone 6</a></h2>

                                <div class="product-carousel-price">
                                    <ins>$1200.00</ins> <del>$1355.00</del>
                                </div>
                                </div>

                                <div class="single-product">
                                <div class="product-f-image">
                                    <img alt=""width="325px"src={require("../img/product-6.jpg")}/>
                                    <div class="product-hover">
                                        <a href="/" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to
                                            cart</a>
                                        <a href="/single-product.js" class="view-details-link"><i
                                                class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>

                                <h2><a href="/single-product.js">Samsung Galaxy note 4</a></h2>

                                <div class="product-carousel-price">
                                    <ins>$1200.00</ins>
                                </div>
                                </div>                    
        </div>                                                    
        )
    }
}
export default Product;
