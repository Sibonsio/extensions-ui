 import '../components/Navbar.css'
 const Navbar = ({handleClick, darkMode, color, value, logo}) =>{
    return(
            <div className='container' style={{backgroundColor : color, boxShadow: value}}>
                <a href='#' className='logo nav-items'>
                    <img className='image-logo' src={`./assets/images/${logo}.svg`} alt='logo'  height='30' />
                </a>
                <button className='dark-mode-btn nav-items' aria-label='Toggle dark mode' onClick={handleClick} title='Toggle dark mode'><img src={`./assets/images/icon-${darkMode}.svg`} alt='logo'  height='30' /></button>
            </div>
    )
 }

 export default Navbar