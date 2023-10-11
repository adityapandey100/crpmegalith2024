import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import HamBurger from './Hamburger/HamBurger';
import HeroSection from './Banner/Banner';
import Carousel from "./Carousel/Carousel";
import {data} from "./Carousel/Data";
import Incentives from './Incentives/Incentives'
import Responsibilities from './Responsibilities/Responsibilities';
import ContactUs from './ContactUs/Contact'

const Home = () => {
const [isOpen, setIsOpen]=useState(false);
const toggle = () => {
    setIsOpen(!isOpen);
};

    return (
        // fragments 
        <>
            <HamBurger isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection/>
        <div className="" style={{objectFit:"contain"}}>
            <Carousel images={data} />
        </div>
            <Incentives />
            <Responsibilities />
            <ContactUs />
            
        </>

    );
};

export default Home;