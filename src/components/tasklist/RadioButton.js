import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

class RadioButton extends Component {

    tripUpdateNewTaskListType(payload){
        this.props.updateNewTaskListType(payload)
    }

    render() {
        return (
            <div className="radio">
                <div>
                    <div className={
                        classNames(
                            'radio-control radio-control-priority mx-auto',
                            (this.props.taskList.newTaskList.type === 1 ? 'radio-control-priority-active' : ''))
                        }
                        onClick={this.tripUpdateNewTaskListType.bind(this, 1)}
                        ></div>
                    <span className="font-weight-bold mt-3">Priority</span>
                </div>

                <div>
                    <div className={
                        classNames(
                            'radio-control radio-control-less_important mx-auto',
                            (this.props.taskList.newTaskList.type === 2 ? 'radio-control-less_important-active' : ''))
                        }
                        onClick={this.tripUpdateNewTaskListType.bind(this, 2)}
                        ></div>
                    <span className="font-weight-bold mt-3">Less Important</span>
                </div>

                <div>
                    <div className={
                        classNames(
                            'radio-control radio-control-minor mx-auto',
                            (this.props.taskList.newTaskList.type === 3 ? 'radio-control-minor-active' : ''))
                        }
                        onClick={this.tripUpdateNewTaskListType.bind(this, 3)}
                        ></div>
                    <span className="font-weight-bold mt-3">Minor</span>
                </div>

                <div>
                    <div className={
                        classNames(
                            'radio-control radio-control-not_important mx-auto',
                            (this.props.taskList.newTaskList.type === 0 ? 'radio-control-not_important-active' : ''))
                        }
                        onClick={this.tripUpdateNewTaskListType.bind(this, 0)}
                        ></div>
                    <span className="font-weight-bold mt-3">Not Important</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        taskList: state.taskList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewTaskListType: (payload) => {
            dispatch({
                type: 'UPDATE_NEW_TASKLIST_TYPE',
                payload: payload
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioButton)