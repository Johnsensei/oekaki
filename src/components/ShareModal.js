import React from "react";
import '../App.css';

const SocialModal = ({setShowModal}) => {
    return(
        <div className='modal-background'>
            <button onClick= {() => setShowModal(false)} >Close</button>
        </div>
    );
}

export default SocialModal;