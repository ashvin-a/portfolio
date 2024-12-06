import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import leaf from '../../Assets/Projects/leaf.png';
import cubesat from '../../Assets/Projects/cubesat.png';
import editor from '../../Assets/Projects/codeEditor.png';
import suicide from '../../Assets/Projects/suicide.png';
import ai_search from '../../Assets/Projects/ai-search.png';

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Selected <strong className="purple">Works </strong>
                </h1>
                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ai_search}
                            isBlog={false}
                            title="AI Search Tool"
                            description="Developed an AI search tool for retreiving data related to UN Women for their website. Used latest technologies like RAG and Natural language to SQL to implement it."
                            demoLink="https://open.unwomen.org/ai-search"
                            // ghLink="Work Done as part of Qburst Technologies Pvt. Ltd."
                        />
                    </Col>
            
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={cubesat}
                            isBlog={false}
                            title="Attitude Determination and Control System of CubeSat"
                            description="Developed an Attitude determination and Control System for a 1U Cubesat using triple axis magnetorquer."
                            ghLink="https://github.com/Bartosat"
                            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={leaf}
                            isBlog={false}
                            title="L.I.L.L.Y"
                            description="Developed an assistant for keeping personal records such as diary entries, meeting schedules, and other events."
                            ghLink="https://github.com/ashvin-a/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor}
                            isBlog={false}
                            title="Slide Narrator"
                            description="Developed a tool for converting presentation slides into a video explaining the slide. Used a combination of open source models from Huggingface."
                            ghLink="https://github.com/ashvin-a/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={suicide}
                            isBlog={false}
                            title="Social Media App"
                            description="Developed a fully functional social media application using Django for both frontend and backend."
                            ghLink="https://github.com/ashvin-a/Social-Media-App"
                            demoLink="https://dj-social-media-app.vercel.app"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
