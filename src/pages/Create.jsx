import CreateCard from "../components/CreateCard.jsx"
import './Create.css'

const Create = ({ darkMode }) => {
    return (
        <div className='create'>
            <CreateCard darkText={darkMode && 'darkText'} lightBg={darkMode && 'lightBg'} />
        </div>
    )
}
export default Create