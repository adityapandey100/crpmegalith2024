import Carousel from "./Components/Carousel/Carousel";
import {data} from "./Components/Carousel/Data";
import Incentives from './Components/Incentives/Incentives'
import Responsibilities from './Components/Responsibilities/Responsibilities';
import ContactUs from './Components/ContactUs/Contact'
import Home from './Components/Home';

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Trail from "./Components/Trail/Trail";
import ForgotPassword from "./Components/Login/ForgotPassword/ForgotPassword";
import Dashboard from "./Components/Login/Dashboard/Dashboard";
import PasswordReset from "./Components/Login/PasswordReset/PasswordReset";
import EmailVerify from "./Components/Login/EmailVerify/EmailVerify";
const App=()=> {
  const user=localStorage.getItem("token");
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        {user && <Route path='/dashboard' element={<Dashboard/>} exact/>}
        <Route path="/" element={<Home/>} exact/>
        <Route path="/signin" element={<Login/>} exact />
        <Route path='/forgot-password' element={<ForgotPassword/>} exact/>
        <Route path="/" element={<Navigate replace to="/signin" />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset/>}/>
        <Route path="/users/:id/verify/:token" element={<EmailVerify/>}/>
      </Routes>
    </BrowserRouter>
    );
  }
  
  export default App;
  
  {/* <div className="" style={{objectFit:"contain"}}>
    <Carousel images={data} />

  </div>
  <Incentives />
  <Responsibilities />
  <ContactUs /> */}