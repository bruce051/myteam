import React from "react";
import './App.css'
import Header from './components/header/Header.jsx'
import MainBuild from './components/mainBuildTeam/MainBuild.jsx';
import Delivering from './components/mainDelivering/MainDelivering.jsx';
import Ready from './components/mainReady/MainReady.jsx';
import Footer from './components/footer/Footer.jsx'

function App(params) {
    return(
        <div className="container">
            <Header/>
            <MainBuild/>
            <Delivering/>
            <Ready/>
            <Footer/>
        </div>
    );
}

export default App;
