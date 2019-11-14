import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import classNames from 'classnames'

import { titleTrim, descTrim } from './../../mixins/auto-trim'
import ICorrect from './../../components/icons/ICorrect'
import ICancel from './../../components/icons/ICancel'

class TaskListOrder extends Component {
    constructor(props){
        super(props)

        this.renderControlContainer.bind(this)
        this.renderControl.bind(this)
        this.renderListSeperator.bind(this)
    }

    renderStatus(status){
        if(status === true){
            return (<span className="tasklist_order-item-status-done">Done</span>)
        } else{
            return (<span className="tasklist_order-item-status-not_done">Not Done</span>)
        }
    }

    renderControlContainer(status, index){
        if(this.props.control){
            return (
                <div className="tasklist_order-item-control">
                    <Button
                        className="mb-3 mx-auto"
                        color={status ? "danger" : "success"}
                        onClick={this.tripUpdateTaskListStatus.bind(this, index)}
                    >
                        {this.renderControl(status)}
                    </Button>

                    <p className="text-danger" onClick={this.tripRemoveTaskList.bind(this, index)}>remove</p>
                </div>
            )
        }

        return false
    }

    renderControl(status, index){
        if(status){
            return (<ICancel />)
        } else {
            return (<ICorrect />)
        }
    }

    renderListSeperator(index){
        let tmpListLength = this.props.taskList.taskList.length
        if(tmpListLength > 1 && index < (tmpListLength - 1)){
            return (<hr />)
        }

        return false
    }

    tripUpdateTaskListStatus(index){
        this.props.updateTaskListStatus(index)
    }

    tripRemoveTaskList(index){
        this.props.removeTaskList(index)
    }

    render() {
        return (
            <div className="dashboard_panel">
                <div className="tasklist_order">
                    {
                        this.props.dataList.map((data, index) => {
                            return (
                                <div key={index}>
                                    <div className={
                                        classNames(
                                            "tasklist_order-item mb-3 pl-3",
                                            `tasklist_order-item-${data.type}`
                                        )
                                    }>
                                        <div className="tasklist_order-item-body">
                                            <h5 className="font-weight-bold">{titleTrim(data.task)}</h5>
                                            <p>{descTrim(data.desc)}</p>
                                        </div>

                                        <div className="tasklist_order-item-status">
                                            {this.renderStatus(data.status)}
                                        </div>

                                        {this.renderControlContainer(data.status, index)}
                                    </div>

                                    {this.renderListSeperator(index)}
                                </div>
                            )
                        })
                    }
                </div>
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
        updateTaskListStatus: (payload) => {
            dispatch({
                type: 'UPDATE_TASKLIST_STATUS',
                payload: payload
            })
        },

        removeTaskList: (payload) => {
            dispatch({
                type: 'REMOVE_TASKLIST',
                payload: payload
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListOrder)
