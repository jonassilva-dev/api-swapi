import React,{Component} from 'react';

import PeopleService from '../../services/PeopleService'

// import { Container } from './styles';

export default class People extends Component {
    constructor(props) {
        super(props)
        this.state = {
        peoples: [],
        pages: 1,
        count: []
        }
    }

   

    SpotPeople = async () => {
        const People = await PeopleService.find(this.state.pages)
        this.setState({peoples: People.data.results})
    }

    countData = async () => {
        const countPages = await PeopleService.all()
        this.setState({count: countPages.data.count})
    }

    nextPage(){
        let total = this.state.count
        let res = total / 10
         if(this.state.pages < res) {
            let r = this.state.pages + 1
            this.setState({pages: r})
         }
    }



    prevPage() {
        if(this.state.pages !== 1) {
            let r = this.state.pages - 1
            this.setState({pages: r})
        }
    }
         
   

    componentDidUpdate(prevProps, prevState){
        if(this.state.pages !== prevState.pages) {
            this.SpotPeople()
        }
    }

    componentDidMount() {
        this.SpotPeople()
        this.countData()
    }

    render(){
        const {peoples} = this.state
        return(
            <main>
                <div className="content">
                    <ul>{peoples.map(people => (
                        <li key={people.name}>
                            <h1>{people.name}</h1>
                            <div className="list-caracter">
                                <div>
                                    <p>Height:</p>
                                    <p>{`${people.height} Cm`}</p>
                                </div>
                                <div>
                                    <p>Mass:</p>
                                    <p>{`${people.mass} Kg`}</p>
                                </div>
                                <div>
                                    <p>Hair:</p>
                                    <p>{`${people.hair_color}`}</p>
                                </div>
                                <div>
                                    <p>Eye:</p>
                                    <p>{people.eye_color}</p>
                                </div>
                                <div>
                                    <p>Gender:</p>
                                    <p>{people.gender}</p>
                                </div>
                            </div>
                        </li>
                    ))}</ul>
                    <button className="next" type="submit"onClick={() => this.nextPage()}>Next</button>
                    <button className="prev" type="submit" onClick={() => this.prevPage()}>Prev</button>
                </div>
            </main>
        )
    }
}