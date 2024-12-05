import React from 'react';
import { Container, Row} from 'react-bootstrap';
import Particle from '../Particle';
import Github from './Github'
import Contribs from './FetchContribs'

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Recent <strong className="purple">Contributions </strong>
                </h1>
                <div className='contrib-projects'>
                    <Contribs owner="langchain-ai" repo="langchain" username="ashvin-a" />
                    <Contribs owner="dataherald" repo="dataherald" username="ashvin-a"/>
                    <Contribs owner="fastapi" repo="fastapi" username="ashvin-a"/>
                    <Contribs owner="openai" repo="openai-cookbook" username="ashvin-a"/>                    
                </div>
                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    <Github/>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
