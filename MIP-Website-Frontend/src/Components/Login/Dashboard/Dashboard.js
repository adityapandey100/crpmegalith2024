import React from 'react'
import "../Dashboard/Dashboard.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
const Dashboard = () => {
  const handleLogout=()=>{
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <div>
	<Sidebar />
	<Routes>
		<Route path='/about-us' element={<AboutUs/>} />
		<Route path='/services' element={<Services/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/events' element={<Events/>} />
		<Route path='/support' element={<Support/>} />
	</Routes>
      <div>
        <nav>
          <h1>MEGALITH</h1>
          <button onClick={handleLogout}>
            Logout
          </button>
        </nav>
		  </div>
    </div>
  )
}

export default Dashboard
