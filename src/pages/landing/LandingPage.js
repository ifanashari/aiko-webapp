import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
// import classNames from 'classnames'
import { Doughnut } from 'react-chartjs-2'

export default class LandingPage extends Component {
    render() {
        const tmpData = {
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                    data: [70, 30]
                }
            ],

            labels: [
                "Done",
                ""
            ]
        }


        return (
            <div>
                <div className="header">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <h2 className="font-weight-bold">
                                    Welcome to <span className="font-weight-light">AIKO</span>
                                </h2>

                                <p>
                                    lorem ipsum dolor sit amet
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="task_preview">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h3 className="section_title">Task Preview</h3>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <div className="task_preview_chart">
                                    <Doughnut
                                        data={tmpData}
                                        options={
                                            {
                                                maintainAspectRatio: true,
                                                cutoutPercentage: 85,
                                                legend: {
                                                    display: false
                                                },
                                                tooltips: {
                                                    enabled: false
                                                }
                                            }
                                        }
                                    />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>

                            </Col>

                            <Col md={6}>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
