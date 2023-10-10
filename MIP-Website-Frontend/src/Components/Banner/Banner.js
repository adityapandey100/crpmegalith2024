/* eslint-disable jsx-a11y/alt-text */
import video from '../../Assets/images/video.mp4'
import { Video, Hero, HeroBanner, HeroContent, HeroH1, HeroP, HeroSpan, Span, Img,Button, HeroButton, HeroP1, HeroSpan1 } from "./BannerElements";
import Kgp from "../../Assets/images/download.png"
import { HeroContainer } from '../Banner/BannerElements';
import {motion } from 'framer-motion'
import {fadeIn} from '../variants'


    const HeroSection = () => {

        
        
    return (
        
        <HeroContainer id='home'>
        <Hero>
            <Video autoPlay loop muted src={video}></Video>
        </Hero>
        <HeroContent>
            <HeroBanner>
                <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}}>
            <HeroH1>
               <Span>Mega</Span>lith 2024
            </HeroH1>
            <HeroP>
            <HeroSpan>Annual Civil Enginnering Technological Fest</HeroSpan> 
            <HeroSpan1>IIT Kharagpur <Img src={Kgp} style={{margin:"-2px"}}></Img> </HeroSpan1>
            </HeroP>
                </motion.div>
                <motion.div variants={fadeIn('left',0.3)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} >
            <HeroP1>
                Campus ambassador program
            </HeroP1>
            <HeroButton>
            <Button to="/CAP/signin"> Register</Button>
            <Button> Program Brochure</Button>
            </HeroButton>
                </motion.div>
            </HeroBanner>
            
            {/* <Button className=''>
                Register
            </Button> */}
        </HeroContent>
       
        </HeroContainer>
        
    );

};

export default HeroSection;