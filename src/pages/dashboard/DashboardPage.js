import React, { Component } from 'react'
import { routeChecker } from './../../mixins/route-checker'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class DashboardPage extends Component {

    // ==========><>|lifecycle|<><==========

    componentDidMount(){
        this.props.updateLayout(routeChecker())
    }

    // ==========><>|lifecycle|<><==========

    render() {
        routeChecker()
        return (
            <div>
                Dashboard page
                <Link to="/">
                    <Button>
                        Back to home
                    </Button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        routeState: state.routeState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateLayout: (payload) => {
            dispatch({
                type: 'UPDATE_LAYOUT',
                payload: payload
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)