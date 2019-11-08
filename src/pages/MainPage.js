import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import AppRoute from './../router/AppRoute'
import 'bootstrap/dist/css/bootstrap.css';
import './../assets/css/main.css';

class MainPage extends Component {
    render() {
        if(this.props.routeState.dashboardLayout){
            return (
                <div>
                    dashboard
                    <BrowserRouter>
                        <AppRoute />
                    </BrowserRouter>
                </div>
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
