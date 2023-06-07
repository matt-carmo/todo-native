import axios from 'axios'

export const api = axios.create({
    baseURL:'http://10.57.46.33:3001/api/'
})