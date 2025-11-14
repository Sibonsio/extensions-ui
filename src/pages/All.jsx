import Cards from '../components/Cards.jsx'
import instance from '../config/axios.jsx'
import { useState, useEffect } from 'react'


const All = ({ darkMode }) => {
    const [data, setData] = useState([])
    const getAllData = async () => {
        try {
            const response = await instance.get('/all')
            setData(response.data.data.cards)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getAllData()
    }, [])
    return (<>
        <Cards darkMode={darkMode} allData={data} />
    </>)
}
export default All