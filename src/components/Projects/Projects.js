import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import assistant from '../../Assets/Projects/assistant.svg';
import cubesat from '../../Assets/Projects/cubesat.gif';
import slide_narrator from '../../Assets/Projects/slide-narrator.svg';
import social_media from '../../Assets/Projects/social-media.svg';
import ai_search from '../../Assets/Projects/ai-search.svg';
import ai_reviewer from '../../Assets/Projects/ai-reviewer.svg';

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
                            imgPath={ai_reviewer}
                            isBlog={false}
                            title="AI Document Reviewer"
                            description="Co-developed an AI-powered reviewing agent as per a client's requirement that efficiently analyzed client's technical documents—delivering human-level insights at a fraction of the cost. This work was done with my team at Qburst Technologies."
                            demoLink=""
                            // ghLink="Work Done as part of Qburst Technologies Pvt. Ltd."
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ai_search}
                            isBlog={false}
                            title="AI Search Tool"
                            description="Developed an AI search tool for retreiving data related to the client for their website. Used latest technologies like RAG and Natural language to SQL to implement it. This work was done with my team at Qburst Technologies."
                            demoLink=""
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
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={social_media}
                            isBlog={false}
                            title="Social Media App"
                            description="Developed a fully functional social media application using Django for both frontend and backend."
                            ghLink="https://github.com/ashvin-a/Social-Media-App"
                            demoLink="https://ashvin-social-media-app.vercel.app"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={assistant}
                            isBlog={false}
                            title="L.I.L.L.Y"
                            description="Developed an assistant for keeping personal records such as diary entries, meeting schedules, and other events."
                            ghLink="https://github.com/ashvin-a/L.I.L.L.Y"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={slide_narrator}
                            isBlog={false}
                            title="Slide Narrator"
                            description="Developed a tool for converting presentation slides into a video explaining the slide. Used a combination of open source models from Huggingface."
                            ghLink="https://github.com/ashvin-a/slide-narrator"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
