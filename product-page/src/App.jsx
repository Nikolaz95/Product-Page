
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    // Dodajte toast da obavijestite korisnika o uklanjanju iz košarice
    toast.error("Item removed from cart.", {
      position: "bottom-right",
      draggable: true,
      onClick: () => toast.dismiss(),
      hideProgressBar: false,
      duration: 5000,
    })
  };

  return (
    <div className='main-content'>
      <Header cartItems={cartItems} removeFromCart={removeFromCart} />
      <Toaster />
      <Content addToCart={addToCart} />
      <Footer />
    </div>
  )
}

export default App
