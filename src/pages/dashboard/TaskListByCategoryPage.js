import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'

import { routeChecker } from './../../mixins/route-checker'

import PageTitle from './../../components/PageTitle'
import TaskListOrder from './../../components/tasklist/TaskListOrder'

class TaskListByCategoryPage extends Component {
    // ==========><>|lifecycle|<><==========

    componentDidMount(){
        this.props.updateLayout(routeChecker())
    }

    // ==========><>|lifecycle|<><==========

    render() {
        return (
            <div>
                <PageTitle title="Task List By Category" />

                <Row className="mb-4">
                    <Col md={6}>
                        <TaskListOrder dataList={this.props.taskList.taskList} control={true} />
                    </Col>

                    <Col md={6}>
                        <TaskListOrder dataList={this.props.taskList.taskList} control={true} />
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <TaskListOrder dataList={this.props.taskList.taskList} control={true} />
                    </Col>

                    <Col md={6}>
                        <TaskListOrder dataList={this.props.taskList.taskList} control={true} />
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        routeState: state.routeState,
        taskList: state.taskList,
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskListByCategoryPage)