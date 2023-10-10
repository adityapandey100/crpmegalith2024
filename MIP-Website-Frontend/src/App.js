import Carousel from "./Components/Carousel/Carousel";
import {data} from "./Components/Carousel/Data";
import Incentives from './Components/Incentives/Incentives'
import Responsibilities from './Components/Responsibilities/Responsibilities';
import ContactUs from './Components/ContactUs/Contact'
import Home from './Components/Home';
import ComingSoon from "./Components/ComingSoon/ComingSoon";
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon/>} exact/>
        <Route path="/CAP" element={<Home/>} />
        <Route path="/CAP/signin" element={<Login/>} exact />
        <Route path='/CAP/forgot-password' element={<ForgotPassword/>} exact/>
        <Route path="/CAP" element={<Navigate replace to="/CAP/signin" />} />
        <Route path="/CAP/password-reset/:id/:token" element={<PasswordReset/>}/>
        <Route path="/CAP/users/:id/verify/:token" element={<EmailVerify/>}/>
        {user && <Route path="/CAP/dashboard" element={<Dashboard/>} exact/>}
      </Routes>
    </BrowserRouter>
    );
  }
  
  export default App;
  
 