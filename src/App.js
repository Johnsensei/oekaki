import React from "react";
import Main from "./components/Main";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";


function App () {
    
    return(
    <div>
        {(window.location.pathname === "/") ? <LandingPage/>
        : (window.location.pathname === "/app") ? <Main/>
        : <NotFound/>}
    </div>
    );
}

export default App;