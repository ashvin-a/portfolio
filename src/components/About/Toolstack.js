import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SiVisualstudiocode, SiNvidia, SiRos, SiPytorch } from 'react-icons/si';
import { DiLinux} from 'react-icons/di';

function Toolstack() {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '60px' }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRos />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNvidia />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPytorch />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiLinux />
            </Col>
        </Row>
    );
}

export default Toolstack;
