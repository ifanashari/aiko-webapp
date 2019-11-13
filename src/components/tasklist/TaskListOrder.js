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
                    {this.renderControl(status, index)}
                </div>
            )
        }

        return false
    }

    renderControl(status, index){
        if(status){
            return (
                <Button color="danger" onClick={this.tripUpdateTaskListStatus.bind(this, index)}>
                    <ICancel />
                </Button>
            )
        } else {
            return (
                <Button color="success" onClick={this.tripUpdateTaskListStatus.bind(this, index)}>
                    <ICorrect />
                </Button>
            )
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

    render() {
        return (
            <div className="dashboard_panel">
                <div className="tasklist_order">
                    {
                        this.props.taskList.taskList.map((data, index) => {
                            return (
                                <div>
                                    <div className={
                                            classNames(
                                                "tasklist_order-item mb-3 pl-3",
                                                `tasklist_order-item-${data.type}`
                                            )
                                        }
                                    key={index}>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListOrder)
