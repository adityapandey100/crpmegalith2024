import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import "./PasswordReset.css"
const PasswordReset = () => {
    const [validUrl,setValidUrl]=useState(false);
    const [Password,setPassword]=useState('');
    const [ConfirmPassword,setConfirmPassword]=useState('');
    const [msg,setMsg]=useState('');
    const [error,setError]=useState('');
    const param=useParams();
    const url=`${process.env.REACT_APP_BASE_URL}/password-reset/${param.id}/${param.token}`;
    useEffect(()=>{
        const verifyUrl=async()=>{
          try{
            await axios.get(url);
            setValidUrl(true);
          }catch(error){
            setValidUrl(false);
          }
        };
        verifyUrl();
    },[param,url]);
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        const {data}=await axios.post(url,{Password,ConfirmPassword});
        setMsg(data.message);
        setError("");
        window.location='/signin';
      } catch (error) {
        if(
          error.response &&
          error.response.status>=400 &&
          error.response.status<=500
        ){
          setError(error.response.data.message);
          setMsg('');
        } 
      }
    }
  return (
    <div className='body'>
      
      {validUrl? (
        // <div>
        //   <form onSubmit={handleSubmit}>
        //     <h1>Create New Password</h1>
        //     <input type='password' placeholder='Password' name='Password' onChange={(e)=>{setPassword(e.target.value)}} value={Password} required/>
        //     <input type='password' placeholder='Confirm Password' name='ConfirmPassword' onChange={(e)=>{setConfirmPassword(e.target.value)}} value={ConfirmPassword} required/>
        //     {error && <div>{error}</div>}
        //     <button type='submit'>Submit</button>
        //   </form>
        // </div>
        <div id="container-create-password">
          <form id="form-create-password" onSubmit={handleSubmit}>
            <h1 id="create-password-heading">Create New Password</h1>
            <div className="password-box">
                <h3>New Password</h3>
                <input type="password" placeholder="Password" name="Password" onChange={(e)=>{setPassword(e.target.value)}} value={Password} required/>
    
            </div>
    
            <div className="password-box">
                <h3>Confirm Password</h3>
                <input type="password" placeholder="Confirm Password" name="ConfirmPassword" onChange={(e)=>{setConfirmPassword(e.target.value)}} value={ConfirmPassword} required/>
            </div>
            {error && <div>{error}</div>}
            {msg && <div>{msg}</div>}
            <button id="submitt" type="submit">Submit</button>
          </form>
        </div>
      ):(
        <h1>
          404 Not Found
        </h1>
      )}
    </div>
  )
}

export default PasswordReset
