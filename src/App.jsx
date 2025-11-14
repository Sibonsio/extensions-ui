import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Inactive from './pages/Inactive.jsx'
import Active from './pages/Active.jsx'
import All from './pages/All.jsx'




const App = () => {
  const [state, setState] = useState(false);





  const handleClick = () => {
    setState(!state)
    document.body.style.backgroundImage = state ? `linear-gradient(180deg, #040918 0%, #091540 100%)` : `linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)`


  }

  return (

    <>
      <Navbar handleClick={handleClick} darkMode={state} color={state ? `hsl(200, 60%, 99%)` : `hsl(226, 25%, 17%)`} value={state && `1px 1px 1px 1px hsl(0, 0%, 78%)`}
        logo={state} />
      <Header color={state && 'hsl(226, 25%, 17%)'} buttonStyle={state && 'color'} takeState={state} />
      <Routes>
        <Route path='/all' element={<All darkMode={state} />} />
        <Route path='/active' element={<Active darkMode={state} />} />
        <Route path='/inactive' element={<Inactive darkMode={state} />} />
      </Routes>

    </>
  )
}

export default App
