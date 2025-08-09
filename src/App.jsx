import React, { useState } from 'react'
import Headers from './Header/Header.jsx'
import Exp from './Components/Exp.jsx'
import './index.css'
import Footer from './Header/Footer.jsx'
import AddExperience from './Components/AddExperience.jsx'
import CreateProfile from './Components/CreatePorfile.jsx'
import MainHeader from './Header/MainHeader.jsx'
import Dashboard from './Components/Dashboard.jsx'
import EditProfile from './Components/EditProfile.jsx'
import PostFeed from './Components/PostFeed.jsx'
import Landing from './Components/Landing.jsx'
import Login from './Components/Login.jsx'
import Post from './Components/Post.jsx'
import Profile from './Components/Profile.jsx'
import Profiles from './Components/Profiles.jsx'
import Register from './Components/Register.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
      {/* < EditProfile />
      <CreateProfile />
      < PostFeed />
     < Dashboard />
      < Login />
      < Post />
      <Register />
      < Profiles /> 
      
       < Profile /> */}
        {/* <MainHeader />
       < Landing /> 
     <Footer /> */}
     {/* <Exp /> 
       <AddExperience />
      <CreateProfile /> */}
      
    </>
  )
}

export default App
