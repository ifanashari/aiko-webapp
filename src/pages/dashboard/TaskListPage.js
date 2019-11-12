import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import { routeChecker } from './../../mixins/route-checker'

import PageTitle from './../../components/PageTitle'
import RadioButton from './../../components/tasklist/RadioButton'

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

                <h6 className="section_title mb-4">Add Task</h6>

                <Row>
                    <Col md={6}>
                        <div className="dashboard_panel task_list-form">
                            <Form>
                                <div className="task_list-form-body">
                                    <FormGroup className="task_list-form-item_half">
                                        <Label>Task Title</Label>
                                        <Input
                                            type="text"
                                            placeholder="Your Task"
                                        />
                                    </FormGroup>

                                    <FormGroup className="task_list-form-item_full">
                                        <Label>Task Description</Label>
                                        <Input
                                            type="textarea"
                                            placeholder="Task Description"
                                        />
                                    </FormGroup>

                                    <div className="task_list-form-item_full">
                                        <RadioButton />
                                    </div>
                                </div>
                            </Form>
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