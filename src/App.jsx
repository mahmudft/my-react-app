import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import User from './components/Card/User'
import List from './components/List/List'
import Terminal from './components/StateFull/Terminal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Terminal/>
    </>
  )
}

export default App
