import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import "./ForgotPassword.css";
const ForgotPassword = () => {
    const [Email,setEmail]=useState('');
    const [msg,setMsg]=useState('');
    const [error,setError]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const url=`${process.env.REACT_APP_BASE_URL}/password-reset`;
            const {data}=await axios.post(url,{Email});
            setMsg(data.message);
            setError('');
        } catch (error) {
            if(
                error.message &&
                error.response.status>=400 &&
                error.response.status<=500
            ){
                setError(error.response.data.message);
                setMsg("");
            }
        }
    };
  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input type="email" placeholder='Email' name='Email' onChange={(e)=>setEmail(e.target.value)} value={Email} required/>
    //     {error && <div>{error}</div>}
    //     {msg && <div>{msg}</div>}
    //     <button type='submit'>
    //         Submit
    //     </button>
    //   </form>
    // </div>
    <div id="container-submission body">
      
      <form id="form-submission" onSubmit={handleSubmit}>
        <h1>Enter your Email</h1>
        <input type="email" placeholder='Email' name='Email' id="email-inputt" onChange={(e)=>setEmail(e.target.value)} value={Email} required/> 
        {error && <div id="error-msg">{error}</div>}
        {msg &&  <div id="msg">{msg}</div>}
        <button type="submit" id="submission">Submit</button>
      </form>
    </div>
  )
}

export default ForgotPassword
