/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line no-unused-vars
import react from "@heroicons/react";
// import { Banner, Img, Title, Video } from "./ComingSoonElements";
import img from '../../Assets/images/megalogotheme.png'
// import video from '../../Assets/images/pexels_videos_1918465 (2160p).mp4'
import {Link as LinkR} from 'react-router-dom'
import "./ComingSoon.css"


const ComingSoon =()=>{
return (
    <>
    <div className="background-container">
  <div className="background-animation">
  </div>
  <div className="logo">
  <img src={img} height={40} width={40}></img>
            <span className="jdsh">Mega</span>lith
  </div>
<div className="coming-soon" >
    <h1 className="h1">
       <span className="jdsh">Mega</span>lith 2024</h1>
    <h2 className="h2">Coming Soon</h2>
    <LinkR to='/CAP'>
    <button className="button"> Register here for CAP </button>
    </LinkR>
</div>
</div>
    </>
);

}

export default ComingSoon;