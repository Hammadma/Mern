import React, { useState } from 'react'
import Headers from './Header/Header.jsx'
import Exp from './Components/Exp.jsx'
import './index.css'
import Footer from './Header/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-red-500 ">Vite + React</h1>
      <Headers />
      <Exp />
      <Footer />
    </>
  )
}

export default App
