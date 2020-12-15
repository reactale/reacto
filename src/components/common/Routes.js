import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Landing, Home, ListOfReactos, Playground } from '../pages'

export default () => (
    <Switch> 
        <Route exact path="/home" component={Home} />
        <Route exact path="/land" component={Landing} />
        <Route exact path="/reactos/:id" component={ListOfReactos} />
        <Route exact path="/reactos" component={ListOfReactos} />
        <Route exact path="/playground" component={Playground} />
        <Redirect to="/land" />
    </Switch>
)