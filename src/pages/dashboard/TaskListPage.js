import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import { routeChecker } from './../../mixins/route-checker'

import PageTitle from './../../components/PageTitle'

class TaskListPage extends Component {

    // ==========><>|lifecycle|<><==========

    componentDidMount(){
        this.props.updateLayout(routeChecker())
    }

    // ==========><>|lifecycle|<><==========

    render() {
        return (
            <div>
                <PageTitle title="Task List" />

                <Row>
                    <Col md={6}>
                        <div className="dashboard_panel">

                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="dashboard_panel">

                        </div>
                    </Col>
                </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskListPage)