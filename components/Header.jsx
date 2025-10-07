import '../components/Header.css'
const Header = ({color, buttonStyle, handleStateClick, filter, takeState})=>{
    return(
        <div className='header-container'>
            {
        console.log(takeState && filter === 'all')}
            <h1 className='title' id='title' style={{color}} >Extensions List</h1>
            <div className='btn-container'><button  className={`all btn ${buttonStyle} ${filter === 'all' && 'bg'}  ${!takeState && filter === 'all'? 'dark-t':'none'} ${takeState && filter === 'all'? 'light-t':'none'}`} onClick={()=>{handleStateClick('all', filter)}} >All</button>
            <button name='active' className={`active btn ${buttonStyle} ${filter === 'active' && 'bg'} ${!takeState && filter === 'active'? 'dark-t':'none'} ${takeState && filter === 'active'? 'light-t':'none'}  `} onClick={()=>{handleStateClick('active', filter)}}>Active</button>
            <button name='inactive' className={`inactive btn ${buttonStyle} ${filter === 'inactive' && 'bg'} ${!takeState && filter === 'inactive'? 'dark-t':'none'} ${takeState && filter === 'inactive'? 'light-t':'none'}`} onClick={()=>{handleStateClick('inactive', filter)}}>Inactive</button></div>
        </div>
    )
} 

export default Header
