import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRoute from './../router/AppRoute'
import 'bootstrap/dist/css/bootstrap.css';

export default class MainPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            dashboardLayout: false
        }
    }

    render() {
        if(this.state.dashboardLayout){
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
