import axios from "axios";

const baseURL = {
    baseURL: 'http://localhost:5002/api/v1'
}
const instance = axios.create(baseURL)
export default instance