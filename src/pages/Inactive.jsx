import Cards from "../components/Cards.jsx"
import instance from '../config/axios.jsx'
import { useState, useEffect } from "react"
const Inactive = ({ darkMode }) => {
    const [data, setData] = useState([])
    const getInactiveData = async () => {
        try {
            const response = await instance.get('/inactive')
            setData(response.data.data.inactiveCards)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getInactiveData()
    }, [data])
    return (<>
        <Cards darkMode={darkMode} allData={data} />
    </>)
}
export default Inactive