import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import IDashboard from './../components/icons/IDashboard'

export default class SideNavigation extends Component {
    render() {
        return (
            <div className="side_nav">
                <Link to="/dashboard">
                    <div className="side_nav-list_item">
                        <IDashboard />
                    </div>
                </Link>
            </div>
        )
    }
}
