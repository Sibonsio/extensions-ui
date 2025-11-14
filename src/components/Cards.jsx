import './Cards.css'
import Card from './Card.jsx'
import { useState, useEffect } from 'react'
import instance from '../config/axios.jsx'



const Cards = ({ darkMode, allData }) => {

    const updatedCard = async (id, isActive) => {
        try {
            const response = await instance.patch(`/update/${id}`, { isActive: isActive })
        } catch (error) {
            console.log(error.message)
        }
    }
    const deleteCard = async (id) => {
        try {
            const response = await instance.delete(`/delete/${id}`)
        } catch (error) {
            console.log(error.message)
        }
    }

    const toggleClick = (id, isActive) => {
        updatedCard(id, isActive)
    }
    const handleClick = (id) => {
        deleteCard(id)
    }
    const showAllCards = allData.map((card) => {
        return <Card key={card._id} lightBg={darkMode && 'lightBg'} darkText={darkMode && 'darkText'} textColor={darkMode && 'textColor'} name={card.name} description={card.description} logo={card.logo} isActive={card.isActive} id={card._id} toggleClick={toggleClick} handleClick={handleClick} />
    })

    return (<div className='grid-container'>{showAllCards}</div>)

}
export default Cards