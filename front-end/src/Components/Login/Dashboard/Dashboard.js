import React from 'react'

const Dashboard = () => {
  const handleLogout=()=>{
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <div>
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
