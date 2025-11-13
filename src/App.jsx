import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Cards from './components/Cards.jsx'
import { useState } from 'react'




const App = () => {
  const [state, setState] = useState(false);
  const [buttonState, setButtonState] = useState('all');




  const handleClick = () => {
    setState(!state)
    document.body.style.backgroundImage = state ? `linear-gradient(180deg, #040918 0%, #091540 100%)` : `linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)`


  }
  const handleStateClick = (name) => {
    if (name === 'all') {
      setButtonState(name)
    } else if (name === 'active') {
      setButtonState(name)
    } else if (name === 'inactive') {
      setButtonState(name)
    }

  }

  return (

    <>
      <Navbar handleClick={handleClick} darkMode={state} color={state ? `hsl(200, 60%, 99%)` : `hsl(226, 25%, 17%)`} value={state && `1px 1px 1px 1px hsl(0, 0%, 78%)`}
        logo={state} />
      <Header color={state && 'hsl(226, 25%, 17%)'} buttonStyle={state && 'color'} handleStateClick={handleStateClick} filter={buttonState} takeState={state} />
      <Cards lightBg={state && 'lightBg'} darkText={state && `darkText`} textColor={state && `textColor`} filterStateCard={buttonState} />
    </>
  )
}

export default App
