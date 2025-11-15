import axios from 'axios'
import './CreateCard.css'
import { useState, useEffect } from 'react'
import instance from '../config/axios.jsx'


const CreateCard = ({ lightBg, darkText, textColor, hidden }) => {
    const [isForm, setForm] = useState({
        image: '',
        name: '',
        desciption: '',
        isActive: '',
    })
    const [data, setData] = useState({})
    const [isActive, setActive] = useState(false)
    const handleChange = (e) => {
        const placeholder = e.target.placeholder
        const imageFile = e.target.files
        const name = e.target.name
        const value = e.target.value
        if (placeholder === 'name') {
            setForm((prev) => {
                return {
                    image: prev.image,
                    name: value,
                    desciption: prev.desciption,
                    isActive: prev.isActive,
                }

            })
        } if (placeholder === 'description') {
            setForm((prev) => {
                return {
                    image: prev.image,
                    name: prev.name,
                    desciption: value,
                    isActive: prev.isActive,
                }

            })
        } if (name === 'image') {
            setForm((prev) => {
                return {
                    image: imageFile,
                    name: prev.name,
                    desciption: prev.desciption,
                    isActive: prev.isActive,
                }

            })
        } if (placeholder === 'isActive') {
            setForm((prev) => {
                return {
                    image: prev.image,
                    name: prev.name,
                    desciption: prev.desciption,
                    isActive: value,
                }

            })
        }


    }

    const createCard = async () => {
        try {
            const response = await instance.post('/create', data)
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createCard()
        setData(isForm)
    }

    return (
        <form method='post' className={`${hidden && 'hidden'} card-container form ${lightBg}`} encType='multipart/form-data' >
            <div className='inputcontainer'>
                <input className='input-image' onChange={handleChange} type='file' name='image' accept='image/*' />
                <div className='inputcontent'>
                    <input className={`inputheading ${darkText}`} onChange={handleChange} id='top-card-heading' type='text' placeholder='name' value={isForm.name} />
                </div>
            </div>
            <input className={`inputdes ${textColor}`} onChange={handleChange} id='top-card-paragraph' type='text' placeholder='description' value={isForm.desciption} />
            <div className='card bottom'>
                <button className={`remove btn ${lightBg} ${darkText}`} onClick={handleSubmit} type='submit'>Submit</button>
                <input className={`inputheading ${darkText}`} onChange={handleChange} id='top-card-heading' type='text' placeholder='isActive' value={isForm.isActive} />
            </div>
        </form>
    )
}

export default CreateCard