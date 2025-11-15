import './Cards.css'
import Card from './Card.jsx'
import { useState, useEffect } from 'react'
import instance from '../config/axios.jsx'



const Cards = ({ darkMode, allData, toggleClick, handleClick }) => {


    const showAllCards = allData.map((card) => {
        return <Card key={card._id} lightBg={darkMode && 'lightBg'} darkText={darkMode && 'darkText'} textColor={darkMode && 'textColor'} name={card.name} description={card.description} logo={card.logo} isActive={card.isActive} id={card._id} toggleClick={toggleClick} handleClick={handleClick} />
    })

    return (<div className='grid-container'>{showAllCards}</div>)

}
export default Cards