import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/home/Home'
import ListOfReactos from '../pages/listOfReactos/ListOfReactos'
import Playground from '../pages/playground/Playground'

export default () => (
    <Switch> 
        <Route exact path="/home" component={Home} />
        <Route exact path="/reactos/:id" component={ListOfReactos} />
        <Route exact path="/reactos" component={ListOfReactos} />
        <Route exact path="/playground" component={Playground} />
        <Route path="/" component={Home} />
    </Switch>
)