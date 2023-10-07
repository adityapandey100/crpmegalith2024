import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope,faPhone,faGraduationCap,faVenusMars,faCalendar,faHandshake,faGlobe,faLocationDot,faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
// import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Selector from './Selector';
import { Country, State, City }  from 'country-state-city';
import  '../Login/Login.css'
import Image1 from '../../Assets/images/log.svg'
import Image2 from '../../Assets/images/register.svg'


console.log(Country.getAllCountries())
console.log(State.getAllStates())

const Login=()=> {

  //Signin Methods
  const [signindata, setSigninData] = useState({ Email: "", Password: "" });
	const [signinerror, setSigninError] = useState("");
  const [signinmsg, setSigninMsg] = useState("");

	const handleSigninChange = ({ currentTarget: input }) => {
		setSigninData({ ...signindata, [input.name]: input.value });
	};

	const handleSigninSubmit = async (e) => {
		// e.preventDefault();
		try {
			const url = "http://localhost:8080/signin";
			const { data: res1 } = await axios.post(url, signindata);
			localStorage.setItem("token", res1.signindata);
			window.location = "http://localhost:3000/dashboard";
      setSigninMsg(res1.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setSigninError(error.response.signindata.message);
        console.log(error);
			}
		}
	};

  //Signup Methods
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [signuperror, setSignupError] = useState("");
  const [signupmsg, setSignupMsg] = useState("");
  const [data, setData] = useState({
		Name: "",
		Email: "",
		Password: "",
		ConfirmPassword: "",
    MobNumber: "",
		College: "",
		Country: "",
		State: "",
    City: "",
		Gender: "",
		YearofStudy: "",
		ifPMegalith: "",
    MegalithID: ""
	});
	

  const handleSignupChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSignupSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/register";
			const { data: res2 } = await axios.post(url, data);
			setSignupMsg(res2.message);
      setData({
        Name: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
        MobNumber: "",
        College: "",
        Country: "",
        State: "",
        City: "",
        Gender: "",
        YearofStudy: "",
        ifPMegalith: "",
        MegalithID: ""
      });
      
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setSignupError(error.response.data.message);
			}
		}
	};

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();

  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);

  return (
    <div className={`loginContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form loginForm" onSubmit={handleSigninSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope}  className='icon' />
              <input type="email" name="Email" placeholder="Email" onChange={handleSigninChange} value={signindata.Email}/>
            </div>
            <div className='input-field'>
              <FontAwesomeIcon icon={faLock} className='icon' />
              <input type='password' name="Password" placeholder='Password' onChange={handleSigninChange} value={signindata.Password}/>
            </div>

              <input type="submit" className="btn" value="Sign In" />

              <div className=' text-blue-700'>
              <Link to='/forgot-password'>
                <p className='text-blue-700 pl-2'>Forgot Password?</p>
              </Link>
              {signinerror && <div>{signinerror}</div>}
              {signinmsg && <div>{signinmsg}</div>}
            </div>
              

            {/* <div className="social-media">
              
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto'/>
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto'/>
              </a>
            </div> */}
          </form >
          <form action="#" className="sign-up-form loginForm" onSubmit={handleSignupSubmit}>
            <h2 className="title">Sign up</h2>
            <div className='scroll'>
            <div className="input-field">
            <FontAwesomeIcon icon={faUser}  className='icon' />
            <input type="text" name="Name" placeholder="Name" onChange={handleSignupChange} value={data.Name}/>
            </div>

            <div className="input-field">
            <FontAwesomeIcon icon={faEnvelope}  className='icon' />
              <input type="email" name="Email" placeholder="Email" onChange={handleSignupChange} value={data.Email}/>
            </div>
            <div className="input-field">
            <FontAwesomeIcon icon={faLock} className='icon' />
              <input type="password" name="Password" placeholder="Password" onChange={handleSignupChange} value={data.Password}/>
            </div>
            <div className="input-field">
            <FontAwesomeIcon icon={faLock} className='icon' />
              <input type="password" name="ConfirmPassword" placeholder="Confirm Password" onChange={handleSignupChange} value={data.ConfirmPassword}/>
            </div>
            <div className="input-field">
            <FontAwesomeIcon icon={faPhone} className='icon' />
              <input type="number" name="MobNumber" placeholder="Phone Number" onChange={handleSignupChange} value={data.MobNumber}/>
            </div>
            <div className="input-field">
            <FontAwesomeIcon icon={faGraduationCap} className='icon' />
              <input type="text" name="College" placeholder="College" onChange={handleSignupChange} value={data.College}/>
            </div>
            <div >
              <div className='input-field' >
                <FontAwesomeIcon icon={faGlobe} className='icon' />
                <p className="text-black font-semibold z-50 ">
                  <Selector
                    data={countryData}
                    selected={country}
                    setSelected={setCountry}
                    // onChange={(country)=>{
                    //   setData({ ...data, Country: country.name });
                    // }}
                    />
                    <div className="hidden">
                      {data.Country=country.name}
                    </div>
                    
                    
                </p>
              </div >
              {state && (
                <div div className='input-field '>
                <FontAwesomeIcon icon={faLocationDot} className='icon' />
                <p className="text-black font-semibold z-40">
                  
                <Selector
                  data={stateData}
                  selected={state}
                  setSelected={setState}
                   onChange={(state)=>{
                      setData({ ...data, State: state.name });
                    }}
                />
                <div className="hidden">
                {data.State=state.name}
                </div>
              </p>
            </div>
          )}
          {city && (
            <div className='input-field '>
              <FontAwesomeIcon icon={faLocationCrosshairs} className='icon' />
              <p className="text-black font-semibold z-30">

              <Selector data={cityData} selected={city} setSelected={setCity} 
              onChange={(city)=>{
                setData({ ...data, City: city.name });
              }}
              />
              <div className="hidden">
              {data.City=city.name}
              </div>
              </p>
            </div>
          )}
            <div className="input-field">
            <FontAwesomeIcon icon={faVenusMars} className='icon' />
              <input type="text" name="Gender" placeholder="Gender" onChange={handleSignupChange}/>
            </div>
        </div>
      
            <div className="input-field">
            <FontAwesomeIcon icon={faCalendar} className='icon' />
              <input type="number" name="YearofStudy" placeholder="Specify your years of study" onChange={handleSignupChange} value={data.YearofStudy}/>
            </div>
            <div className="input-field">
            <FontAwesomeIcon icon={faHandshake} className='icon' />
              <input type="text" name="ifPMegalith" placeholder="Were you a part of Megalith before?" onChange={handleSignupChange} value={data.ifPMegalith}/>
            </div>
            {/* <div className="input-field">
            <FontAwesomeIcon icon={faLock} className='icon' />
              <input type="password" placeholder="Password" />
            </div> */}

            </div>
            
            <div id='sumbitbtn'>
            <input type="submit" className="btn" value="Sign up" />
            {signuperror && <div>{signuperror}</div>}
						{signupmsg && <div>{signupmsg}</div>}
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="contentLogin">
            <h3 className='loginh3'>New here?</h3>
            <p className='loginp'>
             Okay ! , Lets start a journey with us            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img  src={Image1}  className='image' alt="" />
        </div>
        <div className="panel right-panel">
          <div className="contentLogin">
            <h3 className='loginh3'>One of us ?</h3>
            <p className='loginp'>
            Megalith !!!   Welcomes You
            </p>
           
            <button onClick={handleSignInClick} className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img  src={Image2}  className='image' alt="" />
        </div>
      </div>
      {console.log(data)};
    </div>
    
  ) }

  export default Login;
  