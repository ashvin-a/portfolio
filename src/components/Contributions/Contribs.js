import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Particle from '../Particle';
import Github from './Github'

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Recent <strong className="purple">Contributions </strong>
                </h1>
                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    <Github/>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
