import React, { useState } from 'react'
import './index.css'
import Poster from './assets/Components/Poster.jsx' 
import Profile from './assets/Components/Profile.jsx'
import Users from './assets/Components/Users.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-red-500 ">Vite + React</h1>
      <Poster />
      <Profile />
      <Users />

    </>
  )
}

export default App
