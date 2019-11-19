import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'

import { routeChecker } from './../../mixins/route-checker'

import PageTitle from './../../components/PageTitle'
import TaskListOrder from './../../components/tasklist/TaskListOrder'
import RadioButton from './../../components/tasklist/RadioButton'

class TaskListByCategoryPage extends Component {
    // ==========><>|lifecycle|<><==========

    componentDidMount(){
        this.props.updateLayout(routeChecker())
    }

    // ==========><>|lifecycle|<><==========

    tripUpdateTaskListCategoryType(payload){
        this.props.updateTaskListCategoryType(payload)
    }

    render() {
        return (
            <div>
                <PageTitle title="Task List By Category" />

                <Row>
                    <Col md={12}>
                        <div className="dashboard_panel">
                            <div className="task-list-category-container">
                                <RadioButton text="Priority" type={1} form={false} onUpdateTaskListCategoryType={this.tripUpdateTaskListCategoryType.bind(this, 1)} />
                                <RadioButton text="Less Important" type={2} form={false} onUpdateTaskListCategoryType={this.tripUpdateTaskListCategoryType.bind(this, 2)} />
                                <RadioButton text="Minor" type={3} form={false} onUpdateTaskListCategoryType={this.tripUpdateTaskListCategoryType.bind(this, 3)} />
                                <RadioButton text="Not Important" type={0} form={false} onUpdateTaskListCategoryType={this.tripUpdateTaskListCategoryType.bind(this, 0)} />
                            </div>
                        </div>
                    </Col>
                </Row>

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

        updateTaskListCategoryType: (payload) => {
            dispatch({
                type: 'UPDATE_TASKLIST_CATEGORY_TYPE',
                payload: payload
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListByCategoryPage)