import React, { useEffect, useCallback, useState, forceUpdate} from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faInstagram, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import Logo from '../img/drawsultation.png';
import JohnProfile from '../img/johnsensei.png';
import JavinProfile from '../img/javin.png';
import BarretDemo from '../img/barret.gif';
import ComputerDemo from '../img/computer.gif';
import PhoneDemo from '../img/demo-edit2.gif';




function LandingPage(){

    return(
        // Landing Page Container
        <div>
            {/* Header */}
            <div className='landing-header'>
                <img 
                    src={Logo}
                    alt='Drawsultation logo'
                    className='header-logo'
                />
                <button
                    title='Start Drawing'
                    style={{float: 'right',
                        backgroundColor: 'grey',
                        color: '#fff',
                        fontSize: '24px',
                        fontWeight:'bold',
                        textShadow: '2px 2px #000',
                        margin: '1vh',
                        height: '80px',
                        paddingRight: '10px',
                        paddingLeft: '10px',
                        borderRadius: '12px'}}
                        onClick={() => window.location.pathname = '/app'
                                }
                >
                    Start Drawing!
                </button>
            </div>

            <div style={{color: '#fff', margin: '5vh'}}>
                <h1>How it works</h1>
                <p>
                Draw what you want. That’s it! Drawsultation’s interface is simple and easy to use. However you’re feeling, draw it on the pad. It’s your drawsultation.  
                </p>     
            </div>

            {/* Animated GIF with real artist drawing */}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img 
                        src={BarretDemo}
                        alt='Drawsultation demo on smart phone'
                        style={{width: '15%'}}
                />
            </div>

            <div style={{color: '#fff', margin: '5vh'}}>
                <h1 style={{textAlign: 'right'}}>Download your drawing</h1>
                <p style={{textAlign: 'right'}}>
                Drawsultation allows you to download your drawing as a PNG, JPEG, or SVG file.  
                </p>    
            </div>

            {/* Animated GIF of computer demo */}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img 
                        src={ComputerDemo}
                        alt='Drawsultation demo on computer'
                        className='computer-demo'
                />
            </div>

            <div style={{color: '#fff', margin: '5vh'}}>
                <h1 style={{textAlign: 'left'}}>Mobile friendly</h1>
                <p style={{textAlign: 'left'}}>
                Drawsultation’s responsive design allows you to use it anywhere: phone, tablet, computer.  
                </p>    
            </div>

            {/* Animated GIF of responsiveness demo */}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img 
                        src={PhoneDemo}
                        alt='phone demo'
                        style={{width: '50%'}}
                />
            </div>

            <div style={{color: '#fff', margin: '5vh'}}>
                <h1 style={{textAlign: 'right'}}>Creativity happens in the confines</h1>
                <p style={{textAlign: 'right'}}>
                With only eight colors and three pen widths, Drawsultation challenges your innermost creativity to work with limited tools in expressing your idea.  
                </p>     
            </div>

            {/* Team Profiles */}
            <div className='profile-main-container'>
                <h1 style={{textAlign: 'center'}}>The Team</h1>
                <p style={{textAlign: 'center'}}>Profile pictures created with Drawsultation!</p>
                <div className='profile-card-container'>
                    <div className='profile-card'>
                        <img
                            src={JohnProfile}
                            alt='John'
                            className='profile-image' 
                        />
                        <h1 >John Gale</h1>
                        <h2>Developer</h2>
                        <p
                            style={{display:'block'}}
                        >
                        Indie developer, game designer, and Japanese Language Specialist from Nashville, TN. John wrote the code for this site using React, <a href="https://kmkzt.github.io/react-hooks-svgdrawing/" target='_blank' rel="noreferrer">react-hooks-svgdrawing</a>, JavaScript, CSS, and HTML. Favorite artist: Yoshitaka Amano. 
                        </p>
                        {/* Social Icon Container */}
                        <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                            <a href='https://www.johngale.dev/' target='_blank' rel="noreferrer"
                            // style={{margin: '10px'}}
                            >
                                <FontAwesomeIcon
                                icon={faGlobe}
                                size='3x'
                                inverse
                                
                                />
                            </a>
                            <a href='https://github.com/Johnsensei' target='_blank' rel="noreferrer"
                            // style={{margin: '10px'}}
                            >
                                <FontAwesomeIcon
                                icon={faGithubSquare}
                                size='3x'
                                inverse
                                
                                />
                            </a>
                            <a href='https://www.linkedin.com/in/johnagale/' target='_blank' rel="noreferrer"
                            // style={{margin: '10px'}}
                            >
                                <FontAwesomeIcon
                                icon={faLinkedin}
                                size='3x'
                                inverse
                                
                                />
                            </a>
                            <a href='https://twitter.com/MrJohnSensei' target='_blank' rel="noreferrer"
                            // style={{margin: '10px'}}
                            >
                                <FontAwesomeIcon
                                icon={faTwitterSquare}
                                size='3x'
                                inverse
                                
                                />
                            </a>
                        </div>
                    </div>
                    <div className='profile-card'>
                        <img
                            src={JavinProfile}
                            alt='Javin'
                            className='profile-image'
                        />
                        <h1 >Javin Stone</h1>
                        <h2>Designer</h2>
                        <p
                            // style={{margin: '1vh'}}
                        >
                        Artist, Designer, one half of the creative force behind JABECon, and overall cool guy. Javin designed the UI layouts and did the graphic design for this page. John is always dependent on Javin for any art work.
                        </p>
                         {/* Social Icon Container */}
                         <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                            <a href='http://www.jabecon.com/' target='_blank' rel="noreferrer"
                            // style={{margin: '10px'}}
                            >
                                <FontAwesomeIcon
                                icon={faGlobe}
                                size='3x'
                                inverse
                                
                                />
                            </a>
                            {/* <a href='https://github.com/Johnsensei' target='_blank' rel="noreferrer"
                            // style={{margin: '10px'}}
                            >
                                <FontAwesomeIcon
                                icon={faGithubSquare}
                                size='3x'
                                inverse
                                
                                />
                            </a> */}
                            <a href='https://www.instagram.com/zanemiddleten/' target='_blank' rel="noreferrer"
                            // style={{margin: '10px'}}
                            >
                                <FontAwesomeIcon
                                icon={faInstagram}
                                size='3x'
                                inverse
                                
                                />
                            </a>
                            <a href='https://twitter.com/ZaneMiddleten' target='_blank' rel="noreferrer"
                            // style={{margin: '10px'}}
                            >
                                <FontAwesomeIcon
                                icon={faTwitterSquare}
                                size='3x'
                                inverse
                                
                                />
                            </a>
                        </div>
                    </div>
                
                </div>
            </div>

            {/* Footer */}
            <div style={{color: '#fff', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <p>
                Drawsultation was created in one week for the <a href='https://mintbean.io/' target='_blank' rel="noreferrer">Mintbean</a> Fall 2021 Hiring Hackathon. 
                </p>
            </div>
            <div style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px'}}>
                <a href='https://github.com/Johnsensei/oekaki' target='_blank' rel="noreferrer"
                    // style={{margin: '100px'}}
                    >
                        <FontAwesomeIcon
                        icon={faGithubSquare}
                        size='3x'
                        inverse
                        
                        />
                </a>
            </div>

        </div>
    );
}

export default LandingPage;