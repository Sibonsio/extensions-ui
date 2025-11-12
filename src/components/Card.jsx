import './Card.css'
const Card = ({ logo, name, description, handleClick, id, lightBg, darkText, textColor, toggleClick, isActive, itemId }) => {
    return (
        <div className={`card-container ${lightBg}`}>
            <div className='card top'>
                <img className='top-card-logo' src={logo} alt='logo' height='30' />
                <div className='top-card-content'>
                    <h2 className={`top-card-heading top-items ${darkText}`} id='top-card-heading'>{name}</h2>
                    <p className={`top-card-paragraph top-items ${textColor}`} id='top-card-paragraph'>{description}</p>
                </div>
            </div>
            <div className='card bottom'>
                <button className={`remove btn ${lightBg} ${darkText}`} onClick={() => { handleClick(id, itemId) }}>Remove</button>
                <button className={`toggle btn ${isActive ? `none` : `activeState`}`} onClick={() => toggleClick(id, isActive, itemId)}><div className='toggle-icon'></div></button>
            </div>
        </div>
    )
}

export default Card