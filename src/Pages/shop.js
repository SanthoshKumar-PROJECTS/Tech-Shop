import React, {Component} from 'react';
import Header from "../Components/header";
import Footer from '../Components/footer';

class Shop extends Component{

render(){
    return(
        <div>
            <Header></Header>

    <div class="product-big-title-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-bit-title text-center">
                        <h2>Smartphones</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                            <img src={require("../img/product-2.jpg")} alt=""/>
                        </div>
                        <h2><a href="">Nokia Lumia 132</a></h2>
                        <div class="product-carousel-price">
                            <ins>$899.00</ins> <del>$999.00</del>
                        </div>

                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70"
                                rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                        <img src={require("../img/product-1.jpg")} alt=""/>
                        </div>
                        <h2><a href="">Samsung Galaxy s5- 2015</a></h2>
                        <div class="product-carousel-price">
                            <ins>$499.00</ins> <del>$299.00</del>
                        </div>

                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70"
                                rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                        <img src={require("../img/product-3.jpg")} alt=""/>
                        </div>
                        <h2><a href="">LG G8X</a></h2>
                        <div class="product-carousel-price">
                            <ins>$599.00</ins> <del>$399.00</del>
                        </div>

                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70"
                                rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                        <img src={require("../img/product-4.jpg")} alt=""/>
                        </div>
                        <h2><a href="">Sony Xperia M8</a></h2>
                        <div class="product-carousel-price">
                            <ins>$799.00</ins> <del>$599.00</del>
                        </div>

                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70"
                                rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                        <img src={require("../img/product-3.jpg")} alt=""/>
                        </div>
                        <h2><a href="">LG G8X</a></h2>
                        <div class="product-carousel-price">
                            <ins>$599.00</ins> <del>$399.00</del>
                        </div>

                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70"
                                rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                        <img src={require("../img/product-4.jpg")} alt=""/>
                        </div>
                        <h2><a href="">Sony Xperia M8</a></h2>
                        <div class="product-carousel-price">
                            <ins>$799.00</ins> <del>$599.00</del>
                        </div>

                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70"
                                rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                        <img src={require("../img/product-2.jpg")} alt=""/>
                        </div>
                        <h2><a href="">Nokia Lumia 132</a></h2>
                        <div class="product-carousel-price">
                            <ins>$899.00</ins> <del>$999.00</del>
                        </div>

                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70"
                                rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                        <img src={require("../img/product-1.jpg")} alt=""/>
                        </div>
                        <h2><a href="">Samsung Galaxy s5- 2015</a></h2>
                        <div class="product-carousel-price">
                            <ins>$499.00</ins> <del>$299.00</del>
                        </div>

                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70"
                                rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                        <img src={require("../img/product-4.jpg")} alt=""/>
                        </div>
                        <h2><a href="">Sony Xperia M8</a></h2>
                        <div class="product-carousel-price">
                            <ins>$799.00</ins> <del>$599.00</del>
                        </div>

                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70"
                                rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                        <img src={require("../img/product-2.jpg")} alt=""/>
                        </div>
                        <h2><a href="">Nokia Lumia 132</a></h2>
                        <div class="product-carousel-price">
                            <ins>$899.00</ins> <del>$999.00</del>
                        </div>

                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70"
                                rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                        <img src={require("../img/product-1.jpg")} alt=""/>
                        </div>
                        <h2><a href="">Samsung Galaxy s5- 2015</a></h2>
                        <div class="product-carousel-price">
                            <ins>$499.00</ins> <del>$299.00</del>
                        </div>

                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70"
                                rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                        <img src={require("../img/product-3.jpg")} alt=""/>
                        </div>
                        <h2><a href="">LG G8X</a></h2>
                        <div class="product-carousel-price">
                            <ins>$599.00</ins> <del>$399.00</del>
                        </div>

                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70"
                                rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="product-pagination text-center">
                        <nav>
                            <ul class="pagination">
                                <li>
                                    <a href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li>
                                    <a href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <Footer></Footer>
        </div>
    )
}
}
export default Shop;
