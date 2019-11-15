import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './../pages/landing/LandingPage'

import DashboardPage from './../pages/dashboard/DashboardPage'
import TaskListPage from './../pages/dashboard/TaskListPage'
import TaskListByCategoryPage from './../pages/dashboard/TaskListByCategoryPage'

export default class AppRoute extends Component {
    render() {
        return (
            <Switch>
                {/* ==========><>|Main Route|<><========== */}

                <Route exact path="/" component={LandingPage} />

                {/* ==========><>|Main Route|<><========== */}

                {/* ==========><>|Dashboard|<><========== */}

                <Route exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/dashboard/task-list" component={TaskListPage} />
                <Route exact path="/dashboard/task-list-by-category" component={TaskListByCategoryPage} />

                {/* ==========><>|Dashboard|<><========== */}
            </Switch>
        )
    }
}
