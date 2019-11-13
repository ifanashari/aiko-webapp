import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

export default class PageTitle extends Component {
    render() {
        return (
            <Row className="mb-4">
                <Col md={12}>
                    <div className="dashboard_panel">
                        <h5 className="dashboard_panel-page_title">
                            { this.props.title }
                        </h5>
                    </div>
                </Col>
            </Row>
        )
    }
}
