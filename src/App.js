import React from "react";
import Main from "./components/Main";
import LandingPage from "./components/LandingPage";


function App () {
    
    return(
    <div>
        {(window.location.pathname === "/") ? <LandingPage/>
        : <Main/>}
    </div>
    );
}

export default App;