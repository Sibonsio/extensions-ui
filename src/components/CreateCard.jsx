import axios from 'axios'
import './CreateCard.css'
import { useState } from 'react'
import instance from '../config/axios'

const CreateCard = ({ handleClick, lightBg, darkText, textColor, hidden }) => {
    const [isForm, setForm] = useState({
        logo: '',
        name: '',
        desciption: '',
        isActive: '',
    })
    const [isActive, setActive] = useState(false)
    const handleChange = (e) => {
        const placeholder = e.target.placeholder
        const image = e.target.files
        const name = e.target.name
        const value = e.target.value
        if (placeholder === 'name') {
            setForm((prev) => {
                return {
                    logo: prev.logo,
                    name: value,
                    desciption: prev.desciption,
                    isActive: prev.isActive,
                }

            })
        } if (placeholder === 'description') {
            setForm((prev) => {
                return {
                    logo: prev.logo,
                    name: prev.name,
                    desciption: value,
                    isActive: prev.isActive,
                }

            })
        } if (name === 'image') {
            setForm((prev) => {
                return {
                    logo: image,
                    name: prev.name,
                    desciption: prev.desciption,
                    isActive: prev.isActive,
                }

            })
        } if (isActive === true || isActive === false) {
            setForm((prev) => {
                return {
                    logo: prev.logo,
                    name: prev.name,
                    desciption: prev.desciption,
                    isActive: isActive,
                }

            })
        }

    }
    const toggleClick = () => {
        setActive(!isActive)
    }
    return (
        <form method='POST' className={`${hidden && 'hidden'} card-container form ${lightBg}`} encType='multipart/form-data'>
            <div className='inputcontainer'>
                <input className='input-image' onChange={handleChange} type='file' name='image' accept='image/*' />
                <div className='inputcontent'>
                    <input className={`inputheading ${darkText}`} onChange={handleChange} id='top-card-heading' type='text' placeholder='name' />
                </div>
            </div>
            <input className={`inputdes ${textColor}`} onChange={handleChange} id='top-card-paragraph' type='text' placeholder='description' />
            <div className='card bottom'>
                <button className={`remove btn ${lightBg} ${darkText}`} onClick={() => { handleClick(id) }} type='submit'>Submit</button>
                <button className={`toggle btn ${isActive ? `none` : `activeState`}`} onClick={toggleClick} name='isActive' type='button'><div className='toggle-icon' ></div></button>
            </div>
        </form>
    )
}

export default CreateCard