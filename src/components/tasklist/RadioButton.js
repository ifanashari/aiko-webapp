import React, { Component } from 'react'
import { connect } from 'react-redux'

class RadioButton extends Component {
    render() {
        return (
            <div className="radio">
                <div>
                    <div className="radio-control radio-control-priority mx-auto"></div>
                    <span className="font-weight-bold mt-3">Priority</span>
                </div>

                <div>
                    <div className="radio-control radio-control-less_important mx-auto"></div>
                    <span className="font-weight-bold mt-3">Less Important</span>
                </div>

                <div>
                    <div className="radio-control radio-control-minor mx-auto"></div>
                    <span className="font-weight-bold mt-3">Minor</span>
                </div>

                <div>
                    <div className="radio-control radio-control-not_important mx-auto"></div>
                    <span className="font-weight-bold mt-3">Not Important</span>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RadioButton)