import './Cards.css'
import Card from './Card.jsx'
import { useState, useEffect } from 'react'
import instance from '../config/axios.jsx'



const Cards = ({ darkMode, allData }) => {
    const [showCard, setShowCard] = useState()

    const toggleClick = (id, isActive) => {
        console.log(id, isActive)
    }
    const showAllCards = allData.map((card) => {
        return <Card key={card._id} lightBg={darkMode && 'lightBg'} darkText={darkMode && 'darkText'} textColor={darkMode && 'textColor'} name={card.name} description={card.description} logo={card.logo} isActive={card.isActive} id={card._id} toggleClick={toggleClick} />
    })

    return (<div className='grid-container'>{showAllCards}</div>)

}
export default Cards