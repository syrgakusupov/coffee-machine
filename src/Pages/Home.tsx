import React from 'react';
import '../Styles/Home.scss'
import TitlePage from "../Components/TitlePage";
import About from "../Components/About";
import Malfunctions from "../Components/Malfunctions";
import Prices from "../Components/Prices";
import Services from "../Components/Services";
import Brands from "../Components/Brands";
import Map from "../Components/Map";

const Home = () => {
    return (
        <div className='home'>
            <TitlePage/>
            <About/>
            <Malfunctions/>
            <Prices/>
            <Services/>
            <Brands/>
            <Map/>
        </div>
    );
};

export default Home;