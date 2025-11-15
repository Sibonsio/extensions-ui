import './Header.css'
import CreateCard from './CreateCard.jsx'
import { useState } from 'react'
const Header = ({ color, buttonStyle, takeState }) => {
    const [state, setState] = useState(true)
    const handleClick = () => {
        setState(!state)
    }
    return (
        <div className='header-container'>

            <div className='create-header'><h1 className='title' id='title' style={{ color }} >Extensions List</h1><button className={`btn  ${buttonStyle}  `} onClick={handleClick}><span className={`${takeState ? 'dark-t' : 'light-t'} span-cross `}>+</span> <span className={`${takeState ? 'dark-t' : 'light-t'}`}>create</span></button><CreateCard darkText={takeState && 'darkText'} lightBg={takeState && 'lightBg'} hidden={state} /></div>
            <div className='btn-container'><button className={`all btn ${buttonStyle}  `} ><a className={`link-items  ${takeState ? 'dark-t' : 'light-t'}`} href='/'>All</a></button>
                <button name='active' className={`active btn ${buttonStyle}   `} ><a className={`link-items ${takeState ? 'dark-t' : 'light-t'}`} href='/active'>Active</a></button>
                <button name='inactive' className={`inactive btn ${buttonStyle}  `} ><a className={`link-items ${takeState ? 'dark-t' : 'light-t'}`} href='/inactive'>Inactive</a></button></div>
        </div>
    )
}

export default Header
