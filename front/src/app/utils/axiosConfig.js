import axios from 'axios'

const axiosConfig = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:3010',
    timeout: 5000
})

export default axiosConfig