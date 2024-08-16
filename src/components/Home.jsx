import React from 'react'
import { useLocation } from 'react-router-dom'

import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from './Benefits';
import Collaboration from "./Collaboration";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Services from "./Services";



const Home = () => {
    // const location = useLocation();
    // const {Name , Login} = location.state?location.state:""
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                {/* <Header Name={Name} Login={Login} /> */}
                <Header />
                <Hero />
                <Benefits />
                <Collaboration />
                <Services />
                <Roadmap />
                <Footer />
            </div>
            <ButtonGradient />
        </>
    )
}

export default Home
