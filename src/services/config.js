import Axios from 'axios'

const api = Axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export default api