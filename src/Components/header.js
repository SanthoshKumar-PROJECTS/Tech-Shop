import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component{

render(){
    return(
        <div class="mainmenu-area">
        <div class="container">
            <div class="row">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li><NavLink to ="/">Home</NavLink></li>
                        <li><NavLink to="/shop">Shop page</NavLink></li>
                        <li><NavLink to="/single-product">Single product</NavLink></li>
                        <li><NavLink to="/cart">Cart</NavLink></li>
                        <li><NavLink to="/checkout">Checkout</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}
}
export default Header;
