import './Cards.css'
import Card from './Card.jsx'
import { useState, useEffect } from 'react'
import logo from '../assets/images/logo-devlens.svg'

const Cards = ({ lightBg, darkText, textColor, filterStateCard = 'all' }) => {

    const data = [
        {
            "logo": './src/assets/images/logo-devlens.svg',
            "name": "DevLens",
            "description": "Quickly inspect page layouts and visualize element boundaries.",
            "isActive": true,
            "id": 0
        },
        {
            "logo": "./src/assets/images/logo-style-spy.svg",
            "name": "StyleSpy",
            "description": "Instantly analyze and copy CSS from any webpage element.",
            "isActive": true,
            "id": 1
        },
        {
            "logo": "./src/assets/images/logo-speed-boost.svg",
            "name": "SpeedBoost",
            "description": "Optimizes browser resource usage to accelerate page loading.",
            "isActive": false,
            "id": 2
        },
        {
            "logo": "./src/assets/images/logo-json-wizard.svg",
            "name": "JSONWizard",
            "description": "Formats, validates, and prettifies JSON responses in-browser.",
            "isActive": true,
            "id": 3
        },
        {
            "logo": "./src/assets/images/logo-tab-master-pro.svg",
            "name": "TabMaster Pro",
            "description": "Organizes browser tabs into groups and sessions.",
            "isActive": true,
            "id": 4
        },
        {
            "logo": "./src/assets/images/logo-viewport-buddy.svg",
            "name": "ViewportBuddy",
            "description": "Simulates various screen resolutions directly within the browser.",
            "isActive": false,
            "id": 5
        },
        {
            "logo": "./src/assets/images/logo-markup-notes.svg",
            "name": "Markup Notes",
            "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
            "isActive": true,
            "id": 6
        },
        {
            "logo": "./src/assets/images/logo-grid-guides.svg",
            "name": "GridGuides",
            "description": "Overlay customizable grids and alignment guides on any webpage.",
            "isActive": false,
            "id": 7
        },
        {
            "logo": "./src/assets/images/logo-palette-picker.svg",
            "name": "Palette Picker",
            "description": "Instantly extracts color palettes from any webpage.",
            "isActive": true,
            "id": 8
        },
        {
            "logo": "./src/assets/images/logo-link-checker.svg",
            "name": "LinkChecker",
            "description": "Scans and highlights broken links on any page.",
            "isActive": true,
            "id": 9
        },
        {
            "logo": "./src/assets/images/logo-dom-snapshot.svg",
            "name": "DOM Snapshot",
            "description": "Capture and export DOM structures quickly.",
            "isActive": false,
            "id": 10
        },
        {
            "logo": "./src/assets/images/logo-console-plus.svg",
            "name": "ConsolePlus",
            "description": "Enhanced developer console with advanced filtering and logging.",
            "isActive": true,
            "id": 11
        }
    ]
    const [state, setState] = useState(false);
    const [itemIndex, setItemIndex] = useState(null)
    const [itemI, setItemI] = useState(null)
    const [array, setArray] = useState(data)


    const toggleClick = (id, isActive, itemId) => {
        if (id === itemId) {
            setState(!isActive)
            setItemIndex(id)
        }
    }
    const handleClick = (id, itemId) => {
        if (id === itemId) {
            let newArray = array.filter((items) => {
                if (items.id !== id) {
                    return items
                }
            })

            setArray(newArray)
        }

        console.log(id, itemId, itemI)

    }


    const generateCards = array.map((items, index) => {
        if (filterStateCard === 'active' && items.isActive === true) {
            return <Card key={items.id} itemId={items.id = index} isActive={items.id === itemIndex ? items.isActive = state : items.isActive} id={index} logo={items.logo} name={items.name} description={items.description} lightBg={lightBg} darkText={darkText} textColor={textColor} toggleClick={toggleClick} handleClick={handleClick} />

        } else if (filterStateCard === 'inactive' && items.isActive === false) {
            return <Card key={items.id} itemId={items.id = index} isActive={items.id === itemIndex ? items.isActive = state : items.isActive} id={index} logo={items.logo} name={items.name} description={items.description} lightBg={lightBg} darkText={darkText} textColor={textColor} toggleClick={toggleClick} handleClick={handleClick} />

        } else if (filterStateCard === 'all') {
            return <Card key={items.id} itemId={items.id = index} isActive={items.id === itemIndex ? items.isActive = state : items.isActive} id={index} logo={items.logo} name={items.name} description={items.description} lightBg={lightBg} darkText={darkText} textColor={textColor} toggleClick={toggleClick} handleClick={handleClick} />
        }


    })
    return (<div className='grid-container'>{generateCards}</div>)

}
export default Cards