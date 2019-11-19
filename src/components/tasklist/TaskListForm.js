import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import classNames from 'classnames'

import RadioButton from './../../components/tasklist/RadioButton'

class TaskListForm extends Component {
    constructor(props){
        super(props)
        this.renderTaskListType.bind(this)
        this.state = {
            task: "",
            desc: ""
        }
    }

    renderTaskListType(){
        if(this.props.taskList.newTaskList.type === 1){
            return (<span>Priority</span>)
        } else if(this.props.taskList.newTaskList.type === 2){
            return (<span>Less Important</span>)
        } else if(this.props.taskList.newTaskList.type === 3){
            return (<span>Minor</span>)
        } else {
            return (<span>Not Important</span>)
        }
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    tripAddTaskList(){
        let tmpNewTaskList = {
            task: this.state.task,
            desc: this.state.desc
        }

        this.props.addTaskList(tmpNewTaskList)
    }

    tripUpdateNewTaskListType(payload){
        this.props.updateNewTaskListType(payload)
    }

    render() {
        return (
            <div className="dashboard_panel task_list-form">
                <Form>
                    <div className="task_list-form-body">
                        <FormGroup className="task_list-form-item_half">
                            <Label>Task Title</Label>
                            <Input
                                name="task"
                                type="text"
                                placeholder="Your Task"
                                onChange={this.handleChange.bind(this)}
                            />
                        </FormGroup>

                        <div className="task_list-form-item_half">
                            <div className={
                                classNames(
                                    'task_list-form-type',
                                    `task_list-form-type-${this.props.taskList.newTaskList.type}`
                                )
                            }>
                                { this.renderTaskListType() }
                            </div>
                        </div>

                        <FormGroup className="task_list-form-item_full">
                            <Label>Task Description</Label>
                            <Input
                                name="desc"
                                type="textarea"
                                placeholder="Task Description"
                                onChange={this.handleChange.bind(this)}
                            />
                        </FormGroup>

                        <div className="task_list-form-item_full mb-3">
                            <div className="radio">
                                <RadioButton text="Priority" type={1} form={true} onUpdateNewTaskListType={this.tripUpdateNewTaskListType.bind(this, 1)} />
                                <RadioButton text="Less Imoprtant" type={2} form={true} onUpdateNewTaskListType={this.tripUpdateNewTaskListType.bind(this, 2)} />
                                <RadioButton text="Minor" type={3} form={true} onUpdateNewTaskListType={this.tripUpdateNewTaskListType.bind(this, 3)} />
                                <RadioButton text="Not Important" type={0} form={true} onUpdateNewTaskListType={this.tripUpdateNewTaskListType.bind(this, 0)} />
                            </div>
                        </div>

                        <div className="task_list-form-item_full">
                            <Button
                                type="button"
                                color="success"
                                className="form-control"
                                onClick={this.tripAddTaskList.bind(this)}>
                                    Save
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        taskList: state.taskList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTaskList: (payload) => {
            dispatch({
                type: 'ADD_TASKLIST',
                payload: payload
            })
        },
        updateNewTaskListType: (payload) => {
            dispatch({
                type: 'UPDATE_NEW_TASKLIST_TYPE',
                payload: payload
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListForm)