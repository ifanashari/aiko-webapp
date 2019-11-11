import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import AppRoute from './../router/AppRoute'
import 'bootstrap/dist/css/bootstrap.css';
import './../assets/css/main.css';
import SideNavigation from './../components/SideNavigation';

class MainPage extends Component {
    render() {
        if(this.props.routeState.dashboardLayout){
            return (
                <BrowserRouter>
                    <SideNavigation />
                    <div className="dashboard_body">
                        <div className="dashboard_body-content">
                            <AppRoute />
                        </div>
                    </div>
                </BrowserRouter>
            )
        } else{
            return (
                <div>
                    <BrowserRouter>
                        <AppRoute />
                    </BrowserRouter>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return{
        routeState: state.routeState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // updateLayout: (payload) => {
        //     dispatch({
        //         type: 'UPDATE_LAYOUT',
        //         payload: payload
        //     })
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
