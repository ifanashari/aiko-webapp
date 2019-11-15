import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { filterByType } from './../../mixins/task-list'

class TaskListFormPreview extends Component {
    constructor(props){
        super(props)

        this.state = {
            legends: [
                { text: "Priority", type: 1 },
                { text: "Less Important", type: 2 },
                { text: "Minor", type: 3 },
                { text: "Not Important", type: 0 },
            ]
        }

        this.renderListSeperator.bind(this)
    }

    computedPreviewData(){
        let tmpTasklist = this.props.taskList.taskList

        let tmpPriority = filterByType(tmpTasklist, 1)
        let tmpLessImportant = filterByType(tmpTasklist, 2)
        let tmpMinor = filterByType(tmpTasklist, 3)
        let tmpNotImportant = filterByType(tmpTasklist, 0)

        return {
            datasets: [
                {
                    backgroundColor: ['#dc3545', '#ffc107', '#17a2b8', '#6c757d'],
                    borderColor: '#ffffff',
                    data: [
                        tmpPriority,
                        tmpLessImportant,
                        tmpMinor,
                        tmpNotImportant
                    ]
                }
            ],

            labels: [
                'Priority',
                'LessImportant',
                'Minor',
                'NotImportant'
            ]
        }
    }

    renderListSeperator(index){
        let tmpListLength = this.state.legends.length
        if(tmpListLength > 1 && index < (tmpListLength - 1)){
            return (<hr />)
        }

        return false
    }

    render() {
        return (
            <div className="task_list-preview dashboard_panel">
                <div className="task_list-preview-chart mb-3">
                    <Doughnut
                        data={this.computedPreviewData.bind(this)}
                        legend={{display: false}}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false
                        }}
                    />
                </div>

                <div className="task_list-preview-legend">
                    {
                        this.state.legends.map((data, index) => {
                            return (
                                <div key={index}>
                                    <div className={
                                            classNames(
                                                `task_list-preview-legend-item
                                                mb-3
                                                pl-3`,
                                                `task_list-preview-legend-item-${data.type}`
                                            )
                                        }
                                    >
                                        <div className="font-weight-bold">{data.text}</div>

                                        <h1>
                                            {
                                                filterByType(this.props.taskList.taskList, data.type)
                                            }
                                        </h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskListFormPreview)
