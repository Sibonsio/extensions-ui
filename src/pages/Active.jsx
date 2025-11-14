import Cards from "../components/Cards.jsx"
import instance from '../config/axios.jsx'
import { useState, useEffect } from "react"
const Active = ({ darkMode }) => {
    const [data, setData] = useState([])
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
    }, [])
    return (<>
        <Cards darkMode={darkMode} allData={data} />
    </>)
}
export default Active

