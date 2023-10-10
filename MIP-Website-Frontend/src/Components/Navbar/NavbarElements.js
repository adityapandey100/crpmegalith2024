import styled from "styled-components"; //styled-components.com
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#A6BB8D" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;


  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 80px;
  z-index: 100;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  max-width: 100%;
  /* max-width: 1100px; */

`;
export const NavLogo = styled(LinkR)`
  color : #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  font-weight:bold;

  @media screen and (max-width:500px) {
    margin-left: 0;
  }
`; //LinkR shortform R is for Router

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 1050px) {
    display: flex;
    position: relative;
    top: 10%;
    left: 2%;
    max-width: 30px;
    max-height: 30px;
    width: 100%;
    z-index: 1000;
    height: auto;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    /* color: #000; */
    background-color: transparent;
    overflow: hidden;
  }
`;

export const NavMenu = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */
  /* padding-left: %; */


  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
//LinkS for Link Scroll
export const NavLinks = styled(LinkS)`
  font-size: 18px;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  border-radius:60px;
  height:40px;
  margin-top:20px;

  &.active {
    border-bottom: 3px solid #FF6969;
  }
  &:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    
  }
`;

//Nav Btn link and nav btn
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  padding-right:2%;



  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 60px;
  mix-blend-mode:overlay;
  white-space: nowrap;
  padding: 10px 20px;
  color: #010606;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const NavSpan = styled.span`
  color:#881616;
`;