import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './../pages/landing/LandingPage'
import DashboardPage from './../pages/dashboard/DashboardPage'

export default class AppRoute extends Component {
    render() {
        return (
            <Switch>
                {/* ==========><>|Main Route|<><========== */}

                <Route exact path="/" component={LandingPage} />

                {/* ==========><>|Main Route|<><========== */}

                {/* ==========><>|Dashboard|<><========== */}

                <Route exact path="/dashboard" component={DashboardPage} />

                {/* ==========><>|Dashboard|<><========== */}
            </Switch>
        )
    }
}
