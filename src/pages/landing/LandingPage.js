import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
// import { Link } from 'react-router-dom'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <h2 className="font-weight-bold">
                                    Welcome to <span className="font-weight-light">AIKO test</span>
                                </h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
