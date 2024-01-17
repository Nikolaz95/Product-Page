import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


//import pictures
import Pic1 from '../assets/images/image-product-1.jpg';
import Pic2 from '../assets/images/image-product-2.jpg';
import Pic3 from '../assets/images/image-product-3.jpg';
import Pic4 from '../assets/images/image-product-4.jpg';


/* import css */
import '../components/Content.css';

const Content = ({ addToCart }) => {

    const notify = () => toast('Here is your toast.');


    const [count, setCount] = useState(0);

    //increase counter
    const increase = () => {
        setCount(count + 1)
    }

    //decrease counter
    const decrease = () => {
        setCount(count - 1)
    }




    const handleAddToCart = () => {
        if (count > 0) {
            addToCart({
                name: "Fall Limited Edition Sneakers",
                price: 125.00,
                quantity: count
            });

            toast.success('Item added to cart!', {
                position: "bottom-right",
                draggable: true,
                onClick: () => toast.dismiss(),
                hideProgressBar: false,
                duration: 5000,
                style: {
                    border: '1px solid #4caf50',
                    padding: '16px',
                    color: '#4caf50',
                },
                iconTheme: {
                    primary: '#4caf50',
                    secondary: '#4caf50',
                },
            });

            setCount(0);
        } else {
            toast.error('Please select quantity!', {
                position: "bottom-right",
                duration: 5000,
                style: {
                    border: '1px solid #ff5555',
                    padding: '16px',
                    color: '#ff5555',
                },
                iconTheme: {
                    primary: '#ff5555',
                    secondary: '#ff5555',
                },
            });
        }
    }

    const images = [
        {
            original: Pic1,
            thumbnail: Pic1,
        },
        {
            original: Pic2,
            thumbnail: Pic2,
        },
        {
            original: Pic3,
            thumbnail: Pic3,
        },
        {
            original: Pic4,
            thumbnail: Pic4,
        },

    ];


    return (
        <div className='content'>

            <div className="content-main">
                <div className="content-left">
                    <ImageGallery items={images}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showNav={true}
                        /* thumbnailPosition='right' */ />
                </div>
                <div className="content-right">
                    <h1>SNEAKER COMPANY</h1>
                    <p>Fall Limited Edition Sneakers</p>
                    <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>

                    <div className="content-Price">
                        <p className='price'>$125.00</p>
                        <p className='popust'>50%</p>
                    </div>
                    <p className='popust-cijene'>$250.00</p>


                    <div className="content-addToCart">
                        <div className="countProduct">
                            <p className='count' onClick={decrease}>-</p>
                            <p>{count}</p>
                            <p className='count' onClick={increase}>+</p>
                        </div>

                        <div className="addToCart">
                            <button onClick={handleAddToCart}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>


    )
}

export default Content
