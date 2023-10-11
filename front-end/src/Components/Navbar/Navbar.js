/* eslint-disable jsx-a11y/alt-text */

import React, { useState, useEffect } from "react";

import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavSpan,
} from "./NavbarElements";
import Icon from "../../Assets/images/icons8-user-48.png"
import Image from "../../Assets/images/megalogotheme.png"
import { FaBars} from "react-icons/fa"


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    
      <IconContext.Provider value={{ color: "white" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to="/">
            <img src={Image} height={40} width={40}></img>
            <NavSpan>Mega</NavSpan>lith
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
              {/* <p className="text-red-500 text-xs z-100 text-center">HamBurger</p> */}
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                 Home 
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="incentives"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Incentives
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="responsibilities"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Responsibilities
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contactus"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Contact Us
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/CAP/signin">
                <img src={Icon} height={40} width={40}></img>
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      
    </>
  );
};

export default Navbar;
