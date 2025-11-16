import './Cards.css'
import Card from './Card.jsx'

const Cards = ({ darkMode, allData, toggleClick, handleClick }) => {
    const publicPath = 'http://localhost:5002/'
    const showAllCards = allData.map((card) => {
        return <Card key={card._id} lightBg={darkMode && 'lightBg'} darkText={darkMode && 'darkText'} textColor={darkMode && 'textColor'} name={card.name} description={card.description} logo={`${publicPath}${card.image.path}`} isActive={card.isActive} id={card._id} toggleClick={toggleClick} handleClick={handleClick} />
    })

    return (<div className='grid-container'>{showAllCards}</div>)

}
export default Cards