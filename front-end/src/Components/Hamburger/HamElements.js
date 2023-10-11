
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { IoClose} from "react-icons/io5"


export const HamContainer = styled.aside`
    position: fixed;
    z-index: 100;
    display: grid;
    align-items: center;
    backdrop-filter: blur(10px);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')}; 
    /*to add animation and reduce opacity
    using the conditional rendering*/
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')}; 
 
`;

export const HamIcon = styled.div`
    position: absolute;
    top: 20px;
    /* bottom:24px; */
    left: 20px;
    right: 0;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

/* 
@media screen and (min-width:850) {
    display: none;
} */

`;

export const ClosIcon = styled(IoClose)`
z-index: 999;
color: #fff;


`;
export const HamBurgerWrapper = styled.div`
  color: #fff;
 `;
export const HamBurgerMenu = styled.menu`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(7,80px);
 text-align: center;

 @media screen and (max-width: 850px) {
    grid-template-rows: repeat(7,80px);
    margin-top: 0%;
 }
`;

 export const HamBurgerLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover{
    color:red;

    transition: 0.2s ease-in-out;
  }
  `;

  export const SideBtnWrap = styled.div`
  position: relative;
  bottom: 0%;
  top: 10%;
  /* left: 3%; */
   display: flex;
   justify-content: center;
  `;

  export const HamBurgerRoute = styled(LinkR)`
    
    font-size: 1.2rem;
    background-image: linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 30px;
            /* display: block; */
            border: 0px;

  &:hover{
    background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
  }

    
    /* &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
     */
  `;