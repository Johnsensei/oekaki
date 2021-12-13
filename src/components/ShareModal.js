import React from "react";
import '../App.css';

const SocialModal = ({setShowModal}) => {
    return(
        <div className='modal-background'>
            <div className='modal-container'>
                <button onClick= {() => setShowModal(false)} >Close</button>
            </div>
        </div>
    );
}

export default SocialModal;