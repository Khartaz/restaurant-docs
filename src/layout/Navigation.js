import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  
    return ( 
    <React.Fragment>
        {/* <div className="wrapper"> */}
            <div className="sidebar">
                <div className="mob"> 
                    <h2>Account User Controller</h2>
                    <ul>
                        <li><NavLink to="/user-details">Account User Entity Details</NavLink></li>
                        <li><NavLink to="/post-sign-in"><span className="post_method">Post</span> /api/accounts/signin</NavLink> </li>
                        <li><a href="#" class="disabled"><span className="post_method">Post</span> /api/accounts/signup</a> </li>
                        <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/accounts/userUniqueId</a> </li>
                        <li><NavLink to="/get-accounts"><span className="get_method">Get</span> /api/accounts </NavLink></li>
                        <li><a href="#" class="disabled"><span className="put_method">Put</span> /api/accounts</a> </li>
                        <li><a href="#" class="disabled"><span class="delete_method">Delete</span> /api/accounts/id</a> </li>
                    </ul>
                </div>
                <div className="mob">
                <h2>Auth Controller</h2>
                    <ul>
                        <li><a href="#" class="disabled"><span class="post_method">Post</span> /api/auth/email-token</a> </li>
                        <li><a href="#" class="disabled"><span class="post_method">Post</span> /api/auth/password-reset-request</a> </li>
                        <li><a href="#" class="disabled"><span class="post_method">Post</span> /api/auth/reset-password</a> </li>
                        <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/auth/email-verification</a> </li>
                    </ul>
                </div>
                <div class="mob">
                    <li className="linkcat">
                    <h2>Customer Controller</h2>
                        <ul>
                            <li><a href="#" class="disabled"><span class="post_method">Post</span> /api/customers</a> </li>
                            <li><a href="#" class="disabled"><span class="post_method">Post</span> /api/customers/id/orders</a> </li>
                            <li><a href="#" class="disabled"><span class="post_method">Post</span> /api/customers/id/carts/session</a> </li>
                            <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/customers</a> </li>
                            <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/customers/id</a> </li>
                            <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/customers/id/carts</a> </li>
                            <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/customers/id/carts/session</a> </li>
                            <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/customers/id/carts/uniqueId</a> </li>
                            <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/customers/id/orders</a> </li>
                            <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/customers/id/orders/orderNumber</a> </li>
                            <li><a href="#" class="disabled"><span class="put_method">Put</span> /api/customers/id/carts/session</a> </li>
                            <li><a href="#" class="disabled"><span class="put_method">Put</span> /api/customers/id/carts/session/product</a> </li>
                            <li><a href="#" class="disabled"><span class="delete_method">Delete</span> /api/customers/id</a> </li>
                            <li><a href="#" class="disabled"><span class="delete_method">Delete</span> /api/customers/id/carts/session/product</a> </li>
                        </ul>
                    </li>
                </div>
                <div className="mob">
                    <h2>Cart Controller</h2>
                    <ul>
                        <li><a href="#" class="disabled"><span class="post_method">Post</span> /api/carts/customer/customerId</a> </li>
                        <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/carts</a> </li>
                        <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/carts/session</a> </li>
                        <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/carts/session/uniqueId</a> </li>
                        <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/carts/uniqueId</a> </li>
                        <li><a href="#" class="disabled"><span class="put_method">Put</span> /api/carts/session/customerId</a> </li>
                        <li><a href="#" class="disabled"><span class="put_method">Put</span> /api/carts/session/customerId/product</a> </li>
                        <li><a href="#" class="disabled"><span class="delete_method">Delete</span> /api/carts/session/uniqueId</a> </li>
                        <li><a href="#" class="disabled"><span class="delete_method">Delete</span> /api/carts/session/customerId/product</a> </li>
                    </ul>
                </div>
                <div className="mob"> 
                    <h2>Product Controller</h2>
                    <ul>
                        <li><a href="#" class="disabled"><span class="post_method">Post</span> /api/products</a> </li>
                        <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/products</a> </li>
                        <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/products/uniqueId</a> </li>
                        <li><a href="#" class="disabled"><span class="put_method">Put</span> /api/products</a> </li>
                        <li><a href="#" class="disabled"><span class="delete_method">Delete</span> /api/products/uniqueId</a> </li>
                    </ul>
                </div>
                <div className="mob"> 
                    <h2>Order Controller</h2>
                    <ul>
                        <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/orders</a> </li>
                        <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/orders/orderNumber</a> </li>
                        <li><a href="#" class="disabled"><span class="delete_method">Delete</span> /api/orders/orderNumber</a> </li>
                    </ul>
                </div>
                <div className="mob"> 
                    <h2>Daily Order List Controller</h2>
                    <ul>
                        <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/orders/daily</a> </li>
                        <li><a href="#" class="disabled"><span class="post_method">Post</span> /api/orders/daily</a> </li>
                        <li><a href="#" class="disabled"><span class="patch_method">Patch</span> /api/orders/daily/add</a> </li>
                        <li><a href="#" class="disabled"><span class="patch_method">Patch</span> /api/orders/daily/close</a> </li>
                        <li><a href="#" class="disabled"><span class="patch_method">Patch</span> /api/orders/daily/remove</a> </li>
                        <li><a href="#" class="disabled"><span class="get_method">Get</span> /api/orders/daily/uniqueId</a> </li>
                        <li><a href="#" class="disabled"><span class="delete_method">Delete</span> /api/orders/daily/uniqueId</a> </li>
                    </ul>
                </div>
            </div>
        {/* </div> */}
    </React.Fragment>
     );
}
 
export default Navigation;