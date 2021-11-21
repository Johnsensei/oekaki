import React from "react";
import '../App.css';

const NotFound = () => {
    return(
        <div style={{color: '#fff', textAlign: 'center', justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
                <h1>Whoops, that page doesn't exist.</h1>
                <p>
                Head on over to the <a href='/' className='not-found-anchor'>Landing Page</a></p> <p> or start drawing with the <a href='/app' className='not-found-anchor'>Drawsultation App</a>.  
                </p>     
            </div>
    );
}

export default NotFound;