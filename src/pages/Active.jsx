import Cards from "../components/Cards.jsx"
import instance from '../config/axios.jsx'
import { useState, useEffect } from "react"
const Active = ({ darkMode }) => {
    const [data, setData] = useState([])
    const [render, setRender] = useState([]);
    const updatedCard = async (id, isActive) => {
        try {
            const response = await instance.patch(`/update/${id}`, { isActive })
            setRender(response.data.data.updateCard)
        } catch (error) {
            console.log(error.message)
        }
    }
    const deleteCard = async (id) => {
        try {
            const response = await instance.delete(`/delete/${id}`)
            setRender(response.data.data.deleteCard)
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
    const getActiveData = async () => {
        try {
            const response = await instance.get('/active')
            setData(response.data.data.activeCards)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getActiveData()
    }, [render])
    return (<>
        <Cards darkMode={darkMode} allData={data} toggleClick={toggleClick} handleClick={handleClick} />
    </>)
}
export default Active

