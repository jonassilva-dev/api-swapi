import React, {Component} from 'react';
import PlanetServices from '../../services/PlanetService'

// import { Container } from './styles';

export default class Planets extends Component {
    constructor(props) {
      super(props)
      this.state = {
        planets: [],
        pages: 1,

      }
    }
    spotPlanet = async () => {
      const Planets = await PlanetServices.find(this.state.pages)
      this.setState({planets: Planets.data.results})
    }

   

    nextPage(){
       if(this.state.pages < 6) {
          let r = this.state.pages + 1
          this.setState({pages: r})
       }
    }

    prevPages() {
     if(this.state.pages !== 1) {
      let r = this.state.pages - 1
      this.setState({pages: r})
     }
    }

    componentDidUpdate(prevProps, prevState) {
      if(this.state.pages !== prevState.pages) {
        this.spotPlanet()
      }
    }

    componentDidMount() {
      this.spotPlanet()
    }
    render() {

      const {planets} = this.state
      return(
        <main>
          <div className="content">
            <ul>
              {planets.map(planet => (
                <li key={planet.name}>
                  <h1>{planet.name}</h1>
                  <div className="list-caracter">
                    <div>
                      <p>Population:</p>
                      <p>{`${planet.population} Residents`}</p>
                    </div>
                    <div>
                      <p>Diameter:</p>
                      <p>{planet.diameter}</p>
                    </div>
                    <div>
                      <p>Climate:</p>
                      <p>{planet.climate}</p>
                    </div>
                    <div>
                      <p>Gravity:</p>
                      <p>{planet.gravity}</p>
                    </div>
                    <div>
                      <p>Terrain:</p>
                      <p>{planet.terrain}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <button onClick={() => {this.nextPage()}} className="next">Next</button>
            <button onClick={() => {this.prevPages()}} className="prev">Prev</button>
          </div>
          </main>
      )
    }
}


