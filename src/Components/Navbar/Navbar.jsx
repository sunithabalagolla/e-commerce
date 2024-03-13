import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assests/Assets/logo.png';
import carticon from '../Assests/Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu]=useState("shop");

    return (
        <div className='navbar'>

            <div className="nav-logo">
                <img src={logo}></img>
                <p>SHOPPER</p>
            </div>

            <ul className="nav-menu">

                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu==="shop"?<hr></hr>:<></>}</li>

                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to="/womens">Women</Link>{menu==="womens"?<hr></hr>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}  to="/mens">Men</Link>{menu==="mens"?<hr></hr>:<></>}</li>


                <li onClick={()=>setMenu("kids")}><Link style={{textDecoration:'none'}} to="/kids">Kids</Link>{menu==="kids"?<hr></hr>:<></>}</li>

            </ul>

            <div className="nav-login-icon">
                <Link to='/login' style={{textDecoration:'none'}} > <button>Login</button></Link>
               
              <Link to="/cart" style={{textDecoration:'none'}} > <img src={carticon}></img></Link> 
                <div className="nav-cart-count">
                    0
                </div>
            </div>
        </div>
    );
}

export default Navbar;
