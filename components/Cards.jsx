import '../components/Cards.css'
import data from '../data.json'
import Card from './Card.jsx'
import { useState, useEffect } from 'react'


const Cards = ({lightBg, darkText, textColor, filterStateCard = 'all'}) =>{ 
    const [state , setState] = useState(false);
    const [itemIndex, setItemIndex] = useState(null)
    const [itemI, setItemI] = useState(null)
    const [array, setArray] = useState(data)
    
   
    const toggleClick = (id, isActive, itemId)=>{
        if(id === itemId){
            setState(!isActive)
            setItemIndex(id)
        }
    }
    const handleClick = (id, itemId)=>{
        if(id === itemId){
            let newArray = array.filter((items)=>{
                if(items.id !== id){
                    return items
                }
            })
            
            setArray(newArray)
        }
        
        console.log(id, itemId, itemI)
        
    }
    
    
    const generateCards = array.map((items, index) =>{
        if(filterStateCard === 'active' && items.isActive === true){
            return <Card key={items.id} itemId={items.id=index} isActive={items.id === itemIndex? items.isActive=state : items.isActive } id={index} logo={items.logo} name={items.name} description={items.description} lightBg={lightBg} darkText={darkText} textColor={textColor} toggleClick={toggleClick} handleClick={handleClick}   />

        }else if(filterStateCard === 'inactive' && items.isActive === false){
            return <Card key={items.id} itemId={items.id=index} isActive={items.id === itemIndex? items.isActive=state : items.isActive } id={index} logo={items.logo} name={items.name} description={items.description} lightBg={lightBg} darkText={darkText} textColor={textColor} toggleClick={toggleClick} handleClick={handleClick}   />

        }else if(filterStateCard === 'all'){
            return <Card key={items.id} itemId={items.id=index} isActive={items.id === itemIndex? items.isActive=state : items.isActive } id={index} logo={items.logo} name={items.name} description={items.description} lightBg={lightBg} darkText={darkText} textColor={textColor} toggleClick={toggleClick} handleClick={handleClick}  />
        }
        
        
    })
    return(<div className='grid-container'>{generateCards}</div>)

}
export default Cards