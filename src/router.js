import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './Components/Home'
import People from './Components/People'
import Planets from './Components/Planets'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/peoples" component={People}/>
                <Route path="/planets" component={Planets}/>
            </Switch>
        </BrowserRouter>
    )
}