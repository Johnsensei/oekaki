import React, { useEffect, useCallback, useState} from 'react';
import '../App.css';

import Logo from '../img/drawsultation.png';
import JohnProfile from '../img/johnsensei.png';
import JavinProfile from '../img/javin.jpeg';

function LandingPage(){
    return(
        // Landing Page Container
        <div>
            {/* Header */}
            <div className='landing-header'>
                <img 
                    src={Logo}
                    alt='Drawsultation logo'
                />
            </div>

            <div style={{color: '#fff', margin: '5vh'}}>
                <h1>How it works</h1>
                <p>
                Draw what you want. That’s it! Drawsultation’s interface is simple and easy to use. However you’re feeling, draw it on the pad. It’s your drawsultation.  
                </p>     
            </div>

            {/* Placeholder image for animated GIF */}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img 
                        src={Logo}
                        alt='Drawsultation logo'
                />
            </div>

            <div style={{color: '#fff', margin: '5vh'}}>
                <h1 style={{textAlign: 'right'}}>Download your drawing</h1>
                <p style={{textAlign: 'right'}}>
                Drawsultation allows you to download your drawing as a PNG, JPEG, or SVG file.  
                </p>    
            </div>

            <div style={{color: '#fff', margin: '5vh'}}>
                <h1>Creativity happens in the confines</h1>
                <p>
                With only eight colors and three pen widths, Drawsultation challenges your innermost creativity to work with limited tools in expressing your idea.  
                </p>     
            </div>

            {/* Placeholder image for animated GIF */}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img 
                        src={Logo}
                        alt='Drawsultation logo'
                />
            </div>

            <div style={{color: '#fff', margin: '5vh'}}>
                <h1 style={{textAlign: 'right'}}>Mobile friendly</h1>
                <p style={{textAlign: 'right'}}>
                Drawsultation’s responsive design allows you to use it anywhere: phone, tablet, computer.  
                </p>    
            </div>

            {/* Team Profiles */}
            <div className='profile-main-container'>
                <h1 style={{textAlign: 'center'}}>The Team</h1>

                <div className='profile-card-container'>
                    <div className='profile-card'>
                        <img
                            src={JohnProfile}
                            alt='John'
                            className='profile-image' 
                        />
                        <h1 >John Gale</h1>
                        <h2>Developer</h2>
                        <p>
                        Indie developer, game designer, and Japanese Language Specialist from Nashville, TN. John wrote the code for this site using React, JavaScript, CSS, and HTML. Favorite artist: Yoshitaka Amano. 
                        </p>
                    </div>
                    <div className='profile-card'>
                        <img
                            src={JavinProfile}
                            alt='Javin'
                            className='profile-image'
                        />
                        <h1 >Javin Stone</h1>
                        <h2>Designer</h2>
                        <p>
                        Indie developer, game designer, and Japanese Language Specialist from Nashville, TN. John wrote the code for this site using React, JavaScript, CSS, and HTML. Favorite artist: Yoshitaka Amano. 
                        </p>
                    </div>
                
                </div>
            </div>

            {/* Footer */}
            <div style={{color: '#fff', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <p>
                Drawsultation was created in one week for the <a href='https://mintbean.io/' target='_blank' rel="noreferrer">Mintbean</a> Fall 2021 Hiring Hackathon. 
                </p>
            </div>


        </div>
    );
}

export default LandingPage;