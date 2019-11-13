import React, { Component } from 'react'

import { titleTrim, descTrim } from './../../mixins/auto-trim'

export default class TaskListOrder extends Component {
    render() {
// lorem ipsum dolor sit amet
        console.log(descTrim("lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"))

        return (
            <div className="dashboard_panel">
                <div className="tasklist_order">
                    <div className="tasklist_order-item">
                        holo
                    </div>
                </div>
            </div>
        )
    }
}
