import Config from './config'

export default class PeopleService {
    static find = async (page) => {
        return await Config.get(`people?page=${page}`)
    }
    static all = async () => {
        return await Config.get('people')
    }
}