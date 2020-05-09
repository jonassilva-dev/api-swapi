import Config from './config'

export default class PlanetService {
    static find = async (page) => {
        return await Config.get(`planets?page=${page}`)
    }
}