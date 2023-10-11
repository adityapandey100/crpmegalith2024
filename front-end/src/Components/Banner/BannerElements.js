import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  overflow-y: hidden;

  /* :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent);
    z-index: 2; */
  /* } */
`;
export const Video = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;

`;

export const Hero = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
/* text-align: center; */
/* position: relative;
top: 20%; */
 position: absolute;
  top: 15%;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;


@media screen and (max-width:650px) {
    position: absolute;
    top:30%;
    overflow: hidden;
}




`;

export const HeroH1 = styled.h1`
    z-index : 1;
    text-align: center;
    font-size : 120px;
    opacity: 80%;
    text-shadow: 8px 5px 5px #000;
    color: #EADBC8;
    text-transform: uppercase;
    /* mix-blend-mode:overlay; */
    margin-bottom: 0;
    margin-top: 5%;

    /* text-transform: uppercase;
    text-transform: uppercase; */
  /* background-image: linear-gradient(
    -225deg,
    #e6c8f1 0%,
    #3D8DAE 25%,
    #E4A9A8 50%,
    #cf86cf 75%,
    #e6c8f1 100%
    );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 8s linear infinite; */
  /* display: inline-block; */
      /* font-size: 190px; */
/* 
      @keyframes textclip {
  to {
    background-position: 200% center;
  }
}
   */
/* 
    animation: color-animation 4s linear infinite;
    --color-1: #DF8453;
    --color-2: #3D8DAE;
    --color-3: #E4A9A8;
    @keyframes color-animation {
  0%    {color: var(--color-1)}
  32%   {color: var(--color-1)}
  33%   {color: var(--color-2)}
  65%   {color: var(--color-2)}
  66%   {color: var(--color-3)}
  99%   {color: var(--color-3)}
  100%  {color: var(--color-1)}
} */
    



    
       @media screen and (max-width:950px){
        font-size : 80px;
       }   
      @media screen and (max-width:730px){
        font-size : 50px;
       }   
       @media screen and (max-width:385px){
        font-size : 40px;
       }   



`;
export const HeroP = styled.div`
/* position: absolute; */
text-align: center;
font-size: 1.3rem;
color: #000;
/* max-width: 100%; */
font-weight:Bold;
justify-content: space-between;
opacity: 70%;
backdrop-filter: blur(50px);
background-color: white;
/* display: table-row-group; */
/* flex-direction: row; */
margin: 0 19%;
border-radius: 15px;
/* padding-left: 20%; */
@media screen and (max-width:1350px) {
  font-size: 1.3rem;
  margin: 0 15%;
  
}
@media screen and (max-width:1290px) {
  font-size: 1.3rem;
  margin: 0 12%;
  
}

@media screen and (max-width:1250px) {
  font-size: 1.3rem;
  margin: 0 12%;
  
}
@media screen and (max-width:1200px) {
  font-size: 1.3rem;
  margin: 0 10%;
  
}
@media screen and (max-width:1150px) {
  font-size: 1.3rem;
  margin: 0 8%;
  
}

@media screen and (max-width:950px) {
  font-size: 1.2rem;
  margin: 0 18%;
  
}
@media screen and (max-width:850px) {
  font-size: 1.2rem;
  margin: 0 10%;
  
}


@media screen and (max-width:420px) {
    margin: 0 auto;
    text-align: center;
    font-size: 0.8rem;

}
@media screen and (max-width:405px) {
    margin: 0;
    text-align: center;
    font-size: 0.8rem;

}
@media screen and (max-width:390px) {
    margin: 0 auto;
    text-align: center;
    font-size: 0.8rem;

}
@media screen and (max-width:375px) {
    margin: 0 8%;
    text-align: center;
    font-size: 0.65rem;

}
/* margin-: ; */
/* &:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606; */



/* @media screen and (min-wdith: 480px) {
  font-size: 32px;
} */



`;

export const HeroSpan = styled.span`
       z-index:1;
       /* text-align: center; */
       font-size: 1.3rem;
       justify-content: center;
       width: 100%;
       position : relative;
       /* right: 19%; */
       /* bottom :9%; */
       padding: 0 1%;
       font-weight:Bold;
       /* display: flex;
       flex-direction: row; */
       /* background-color: white; */
       /* backdrop-filter: blur(100px); */
       border-radius: 10px;
       margin-right:15% ;

 /* @media screen and (max-width:1200px) {

   padding-left:30%;
  
}
@media screen and (max-width:1150px) {

   padding-left:27%;
  
}
@media screen and (max-width:1100px) {

   padding-left:24%;
   */
/* }    */
 @media screen and (max-width:1050px) {

   margin-right: 12%;
  
}
@media screen and (max-width:950px) {

padding-left:2%;

} 
@media screen and (max-width:850px) {

padding-left:2%;
margin-right: 0;

} 
@media screen and (max-width:450px) {

padding-left:2%;
margin-left:0;
font-size: 0.8rem;

} 
@media screen and (max-width:390px) {

padding-left:2%;
margin-left:0;
font-size: 0.6rem;

} 
@media screen and (max-width:375px) {

padding-left:2%;
margin-left:0;
font-size: 0.6rem;

} 


`;

export const HeroSpan1 = styled.span`
       z-index:1;
       /* text-align: center; */
       font-size: 1.3rem;
       justify-content: center;
       width: 100%;
       position : relative;
       /* left: 19%; */
       /* bottom :9%; */
       padding-left: 1%;
       /* padding-right: 1%; */
       font-weight:Bold;
       /* display: flex;
       flex-direction: row; */
       /* background-color: white; */
       /* backdrop-filter: blur(100px); */
       border-radius: 10px;
       margin-left: 12%;

 /* @media screen and (max-width:1200px) {

   padding-left:30%;
  
}
@media screen and (max-width:1150px) {

   padding-left:27%;
  
}
@media screen and (max-width:1100px) {

   padding-left:24%;
  
}   */
/* @media screen and (max-width:1050px) {

   padding-left:21%;
  
} */
@media screen and (max-width:950px) {

padding-left:2%;

} 
@media screen and (max-width:850px) {

padding-left:2%;
margin-left:0;

} 
@media screen and (max-width:450px) {

padding-left:2%;
margin-left:0;
font-size: 0.8rem;

} 
@media screen and (max-width:390px) {

padding-left:2%;
margin-left:0;
font-size: 0.6rem;

} 
@media screen and (max-width:375px) {

padding-left:2%;
margin-left:0;
font-size: 0.6rem;

} 


`;

export const Span = styled.span`
        color:#881616;

`;


export const HeroBanner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Button = styled(LinkR)`
/* position:absolute; */
/* left: 55%; */
/* bottom:5% ; */
top: 30%;
/* text-align: center;  */
font-size: 1rem;
background-image: linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980  100%);
            margin: 10px;
            padding: 10px 35px;
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



  @media screen  and (max-width: 500px) {
    font-size: 0.5rem;
    
  }
  @media screen  and (max-width: 950px) {
    font-size: 0.75rem;

    
  }
  @media screen  and (max-width: 450px) {
    font-size: 0.6rem;
    padding: 5px 15px;

    
  }

`;
export const HeroButton = styled.div`
position:absolute;
/* left: 50%; */
/* bottom:5% ; */
/* top: 45%; */
text-align: center;
font-size: 25px;
padding-left:10px;
/* display: table-row; */
/* left: 30%; */
padding-left: 50%;

@media screen  and (max-width: 950px) {
  padding-left: 42%;

    
  }
  @media screen  and (max-width: 450px) {
    padding-left: 24%;
    
    
  }  
  @media screen  and (max-width: 400px) {
    padding-left: 30%;
  
      
    }  





`;

export const Img = styled.img`

height:1.1rem ;
width: 1.1rem;

@media screen and (max-width:420px) {
  height:0.7rem ;
width: 0.7rem;

}
`;

export const HeroP1 = styled.p`
justify-content: center;
display: flex;
font-size: 4.0rem;
text-transform: uppercase;
padding-top: 1%;
color: #A6D0DD;
/* border:3px solid red ;
border-radius: 100px; */
/* color: #609966; */
text-shadow: 5px 10px 20px #000;


@media screen and (max-width:1100px){
        font-size : 3rem;
       }   
@media screen and (max-width:850px){
        font-size : 2.5rem;
       }   
@media screen and (max-width:450px){
        font-size : 1.5rem;
       }  
@media screen and (max-width:405px){
        font-size : 1.3rem;
       }              

`;