import './Navbar.css'
import logo1 from '../assets/images/logo.svg'
import logo2 from '../assets/images/logo-copy.svg'
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'
const Navbar = ({ handleClick, darkMode, color, value, logo }) => {


    return (
        <div className='container' style={{ backgroundColor: color, boxShadow: value }}>
            <a href='#' className='logo nav-items'>
                <img className='image-logo' src={logo ? logo2 : logo1} alt='logo' height='30' />
            </a>
            <button className='dark-mode-btn nav-items' aria-label='Toggle dark mode' onClick={handleClick} title='Toggle dark mode'><img src={darkMode ? moon : sun} alt='logo' height='30' /></button>
        </div>
    )
}

export default Navbar