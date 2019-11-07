import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './../pages/landing/LandingPage'

export default class AppRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage} />
            </Switch>
        )
    }
}
