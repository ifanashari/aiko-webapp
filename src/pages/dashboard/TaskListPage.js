import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'

import { routeChecker } from './../../mixins/route-checker'

import PageTitle from './../../components/PageTitle'
import TaskListForm from './../../components/tasklist/TaskListForm'
import TaskListOrder from './../../components/tasklist/TaskListOrder'

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
                        <TaskListForm />
                    </Col>

                    <Col md={6}>
                        <TaskListOrder control={true} />
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        routeState: state.routeState,
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