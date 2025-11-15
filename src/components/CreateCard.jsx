import axios from 'axios'
import './CreateCard.css'
import { useState, useEffect } from 'react'
import instance from '../config/axios.jsx'



const CreateCard = ({ lightBg, darkText, textColor, hidden }) => {
    const [isForm, setForm] = useState({
        image: '',
        name: '',
        description: '',
        isActive: '',
    })
    const [data, setData] = useState('')

    const handleChange = (e) => {
        const placeholder = e.target.placeholder

        const value = e.target.value
        if (placeholder === 'name') {
            setForm((prev) => {
                return {
                    image: prev.image,
                    name: value,
                    description: prev.description,
                    isActive: prev.isActive,
                }

            })
        } if (placeholder === 'description') {
            setForm((prev) => {
                return {
                    image: prev.image,
                    name: prev.name,
                    description: value,
                    isActive: prev.isActive,
                }

            })
        } if (placeholder === 'isActive') {
            setForm((prev) => {
                return {
                    image: prev.image,
                    name: prev.name,
                    description: prev.description,
                    isActive: value,
                }

            })
        }


    }
    const handleUpload = (e) => {
        const name = e.target.name
        const imageFile = e.target.files[0]
        if (name === 'image') {
            setForm((prev) => {
                return {
                    image: imageFile,
                    name: prev.name,
                    description: prev.description,
                    isActive: prev.isActive,
                }

            })
        }
    }

    const createCard = async () => {
        try {
            const response = await instance.post('/create', data,
                { headers: { 'Content-Type': 'multipart/form-data' } })
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData(isForm)
        setForm({
            image: '',
            name: '',
            description: '',
            isActive: '',
        })

    }
    useEffect(() => {
        if (data !== '') {
            createCard()
        }
    }, [data])


    return (
        <form method='post' className={`${hidden && 'hidden'} card-container form ${lightBg}`} encType='multipart/form-data' >
            <div className='inputcontainer'>
                <input className='input-image' onChange={handleUpload} type='file' name='image' />
                <div className='inputcontent'>
                    <input className={`inputheading ${darkText}`} onChange={handleChange} id='top-card-heading' type='text' placeholder='name' value={isForm.name} />
                </div>
            </div>
            <input className={`inputdes ${textColor}`} onChange={handleChange} id='top-card-paragraph' type='text' placeholder='description' value={isForm.description} />
            <div className='card bottom'>
                <button className={`remove btn ${lightBg} ${darkText}`} onClick={handleSubmit} type='submit'>Submit</button>
                <input className={`inputheading ${darkText}`} onChange={handleChange} id='top-card-heading' type='text' placeholder='isActive' value={isForm.isActive} />
            </div>
        </form>
    )
}

export default CreateCard