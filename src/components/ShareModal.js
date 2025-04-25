import React from "react";
import '../App.css';

const SocialModal = ({setShowModal}) => {

    const facebook = `{https://www.facebook.com/sharer.php?u=https:drawsultation.com? 
        imageurl=}`

    return(
        <div className='modal-background'>
            <div className='modal-container'>
                <div className='close-button'>
                    <button onClick= {() => setShowModal(false)} >X</button>
                </div>
                <div>
                    <a
                      data-pgaction-redirection="0"
                      target="_blank"
                      rel="noopener noreferrer"
                      title='Share to Facebook'
                      href={facebook}
                    >Facebook</a>
                </div>
            </div>
        </div>
    );
}

export default SocialModal;