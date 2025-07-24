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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-red-500 ">Vite + React</h1>
      <Headers /> 
      < EditProfile />
      <CreateProfile />
      < PostFeed />
     < Dashboard />
      < Login />
      < Post />
      <Register />
      < Profiles /> 
       < Profile />
       < Landing /> 
     <MainHeader />
     <Exp /> 
       <AddExperience />
      <CreateProfile />
      <Footer />
    </>
  )
}

export default App
