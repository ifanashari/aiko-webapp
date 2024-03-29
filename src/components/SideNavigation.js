import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import IDashboard from './../components/icons/IDashboard'
import ITaskList from './../components/icons/ITaskList'
import ICategory from './../components/icons/ICategory'

export default class SideNavigation extends Component {

    components = {
        IconTaskList: ITaskList
    }

    render() {
        return (
            <div className="side_nav">
                <NavLink
                    to="/dashboard"
                    exact={true}
                    className="side_nav-list_item"
                    activeClassName="side_nav-list_item-active"
                >
                    <IDashboard />
                </NavLink>

                <NavLink
                    to="/dashboard/task-list"
                    exact={true}
                    className="side_nav-list_item"
                    activeClassName="side_nav-list_item-active"
                >
                    <ITaskList />
                </NavLink>

                <NavLink
                    to="/dashboard/task-list-by-category"
                    exact={true}
                    className="side_nav-list_item"
                    activeClassName="side_nav-list_item-active"
                >
                    <ICategory />
                </NavLink>
            </div>
        )
    }
}
