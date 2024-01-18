import React, { useEffect, useRef } from 'react'
import ImageGallery from "react-image-gallery";

/* import css */
import '../components/Modal.css';

//import icon
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ images, toggleCloseModal, showModal, setModal }) => {

    /* klick outside to close */

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setModal(false);
                /* console.log(menuRef.current); */
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [menuRef]);

    return (
        <>
            {showModal && (
                <div className="modal">
                    <div className="modal-container" ref={menuRef}>
                        <span onClick={toggleCloseModal} className='close-modal'><IoMdCloseCircle /></span>
                        <ImageGallery
                            items={images}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            showNav={true}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
