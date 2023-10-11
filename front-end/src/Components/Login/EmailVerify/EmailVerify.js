import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import "./EmailVerify.css"

const EmailVerify = () => {
  const [validUrl,setValidUrl]=useState('');
  const param=useParams();

  useEffect(()=>{
    const verifyEmailUrl=async()=>{
      try {
        const url=`${process.env.REACT_APP_BASE_URL}/users/${param.id}/verify/${param.token}`;
        const {data}=await axios.get(url);
        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
      }
      
    };
    verifyEmailUrl();
  },[param])
  return (
    <div>
      {validUrl? (
        // <div>
        //   <h1>Email Verified Succesfully</h1>
        //   <Link to='/signin'>
        //     <button>SIGN IN</button>
        //   </Link>
        // </div>
        <div id="container-verifiedd">
        <h1>Email Verified Successfully</h1>
        <Link to="/CAP/signin">
          <button id="signinn">SIGN IN</button>
        </Link>
        </div>
      ):(
        <h1>
          404 Not Found
        </h1>
      )}
    </div>
  )
}

export default EmailVerify
