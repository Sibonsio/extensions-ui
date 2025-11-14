import './Header.css'
const Header = ({ color, buttonStyle, handleStateClick, filter, takeState }) => {
    return (
        <div className='header-container'>

            <h1 className='title' id='title' style={{ color }} >Extensions List</h1>
            <div className='btn-container'><button className={`all btn ${buttonStyle}  `} ><a className={`link-items  ${takeState ? 'dark-t' : 'light-t'}`} href='/all'>All</a></button>
                <button name='active' className={`active btn ${buttonStyle}  ${takeState ? 'dark-t' : 'light-t'} `} ><a className={`link-items ${takeState ? 'dark-t' : 'light-t'}`} href='/active'>Active</a></button>
                <button name='inactive' className={`inactive btn ${buttonStyle}  ${takeState ? 'dark-t' : 'light-t'}`} ><a className={`link-items ${takeState ? 'dark-t' : 'light-t'}`} href='/inactive'>Inactive</a></button></div>
        </div>
    )
}

export default Header
