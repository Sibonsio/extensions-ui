import './Header.css'
const Header = ({ color, buttonStyle, takeState }) => {


    return (
        <div className='header-container'>

            <div className='create-header'><h1 className='title' id='title' style={{ color }} >Extensions List</h1><button className={`btn  ${buttonStyle}  `} ><a className={`link-items  ${takeState ? 'dark-t' : 'light-t'}`} href='/create'><span className={`${takeState ? 'dark-t' : 'light-t'} span-cross `}>+</span> <span className={`${takeState ? 'dark-t' : 'light-t'}`}>create</span></a></button></div>
            <div className='btn-container'><button className={`all btn ${buttonStyle}  `} ><a className={`link-items  ${takeState ? 'dark-t' : 'light-t'}`} href='/'>All</a></button>
                <button name='active' className={`active btn ${buttonStyle}   `} ><a className={`link-items ${takeState ? 'dark-t' : 'light-t'}`} href='/active'>Active</a></button>
                <button name='inactive' className={`inactive btn ${buttonStyle}  `} ><a className={`link-items ${takeState ? 'dark-t' : 'light-t'}`} href='/inactive'>Inactive</a></button></div>
        </div>
    )
}

export default Header
