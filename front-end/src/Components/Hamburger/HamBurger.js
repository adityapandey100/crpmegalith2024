/* eslint-disable no-undef */
import React from "react";
import { ClosIcon, HamBurgerLink, HamBurgerMenu, HamBurgerRoute, HamBurgerWrapper, HamContainer, HamIcon, SideBtnWrap } from "./HamElements";
const HamBurger = ({isOpen,toggle}) => {

    return(
        <>
        <HamContainer isOpen={isOpen} onClick={toggle}>
            <HamIcon onClick={toggle}>
                <ClosIcon/>
            </HamIcon>
            <HamBurgerWrapper>
                <HamBurgerMenu>
                    <HamBurgerLink 
                    to="home"
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                    >
                        Home
                    </HamBurgerLink>
                    <HamBurgerLink
                    to="about"
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                    >
                        About
                    </HamBurgerLink>
                    <HamBurgerLink to="Intership Brochure" onClick={toggle}>
                        Intership Brochure
                    </HamBurgerLink>
                    <HamBurgerLink 
                    to="incentives"
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                    >
                        Incentives
                    </HamBurgerLink>
                    <HamBurgerLink 
                    to="responsibilities"
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                    >
                        Responsibilities
                    </HamBurgerLink>
                    <HamBurgerLink to="www.google.com" onClick={toggle}>
                        Megalith 2023
                    </HamBurgerLink>
                    <HamBurgerLink 
                    to="contactus"
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                    >
                        Contact Us
                    </HamBurgerLink>
                </HamBurgerMenu>
                <SideBtnWrap>
                    <HamBurgerRoute to='/signin' >
                        Register
                    </HamBurgerRoute>
                </SideBtnWrap>
            </HamBurgerWrapper>
        </HamContainer>
        </>

    );
};

export default HamBurger;