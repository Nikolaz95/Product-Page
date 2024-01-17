import React, { useState } from 'react'



/* imoirt icon */
import { FaCartPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";




//import pictures
import Logo from '../assets/images/logo123.svg';
import Pic1 from '../assets/images/image-product-1.jpg';

/* import css */
import '../components/Header.css';

const Header = ({ cartItems, removeFromCart }) => {
    const [showCart, setShowCart] = useState(false)

    const togleHandleCart = () => {
        setShowCart(!showCart)
    }


    const renderCartContent = () => {
        if (cartItems.length === 0) {
            return (
                <div className="cart-botom">
                    <p className='cart-empty'>Your cart is empty.</p>
                </div>
            );
        } else {
            // Računanje ukupnog troška
            const totalCost = cartItems.reduce((total, item) => {
                return total + item.quantity * item.price;
            }, 0);
            return (
                <div className="cart-item">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-Insideitem">
                            <img src={Pic1} className='cart-img' alt="" />
                            <div className="cart-info">
                                <p>{item.name}</p>
                                <span>{item.quantity} x {item.price.toFixed(2)}$</span> <span>{(item.quantity * item.price).toFixed(2)}$</span>
                            </div>
                            <button onClick={() => removeFromCart(index)}><FaTrashAlt /></button>
                        </div>
                    ))}

                    <span className="linija"></span>
                    <div className="total-cost">
                        <span>{totalCost.toFixed(2)} $</span>
                    </div>
                    <div className="cart-checkOut">
                        <button className="checkOut-btn">Checkout <FaCartPlus /></button>
                    </div>
                </div>
            );
        }
    };



    return (
        <header>
            <div className="content-header">
                <div className="header-left">
                    <img src={Logo} alt="" />
                    <div className="navbar">
                        <ul>
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="header-right">
                    <nav className='nav-right'>
                        <ul>
                            <button onClick={togleHandleCart}><FaCartPlus /></button>
                            {cartItems.length > 0 && <span className='cart-num'>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>}
                            <li>logo</li>
                        </ul>
                    </nav>
                </div>
            </div>

            {showCart && (
                <div className={`cart-container ${showCart ? 'open' : 'close'}`}>

                    <div className="cart-top">
                        <h1>Cart</h1>
                    </div>
                    <span className="linija"></span>
                    {renderCartContent()}
                </div>
            )}
        </header>
    )
}

export default Header
