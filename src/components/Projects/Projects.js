import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import obst_avoidance from '../../Assets/Projects/obstacle-avoidance.svg';
import cubesat from '../../Assets/Projects/cubesat.gif';
import mpj_mark_3 from '../../Assets/Projects/mpj-mark-3.svg';
import robocup from '../../Assets/Projects/robocup.jpg';
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
                            imgPath={robocup}
                            isBlog={true}
                            title="Multiagent Coordination & Decision Making"
                            description="Worked on developing the simulation and training gym environment for Booster T1 robots for participating in RoboCup Tournament. It is done under the guidance of Prof. Josiah Hanna. The work is currently in progress."
                            demoLink="https://pages.cs.wisc.edu/~jphanna/robocup.html"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={obst_avoidance}
                            isBlog={false}
                            title="Obstacle Avoidance & Detection"
                            description="Designed and developed an obstacle avoidance and detection algorithm for a mars rover. This work was done as a member of Wisconsin Robotics."
                            ghLink="https://github.com/ashvin-a/WRover-Obstacle-Avoidance"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ai_search}
                            isBlog={false}
                            title="AI Search Tool"
                            description="Developed an AI search tool for retreiving data related to the client for their website. Used latest technologies like RAG and Natural language to SQL to implement it. This work was done with my team at Qburst Technologies."
                            demoLink="https://open.unwomen.org/en/ai-search"
                            // ghLink="Work Done as part of Qburst Technologies Pvt. Ltd."
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ai_reviewer}
                            isBlog={false}
                            title="AI Document Reviewer"
                            description="Developed an AI-powered reviewing agent as per a client's requirement that efficiently analyzed client's technical documents—delivering human-level insights at a fraction of the cost. This work was done with my team at Qburst Technologies."
                            demoLink=""
                            // ghLink="Work Done as part of Qburst Technologies Pvt. Ltd."
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={mpj_mark_3}
                            isBlog={false}
                            title="MPJ-Mark-3"
                            description="Developed a RISC-V 5 stage pipelined microprocessor which includes features such as forwarding, rf bypassing, hazard detection, branch predictor and cache. This project was done with my team as a course requirement for ECE 552."
                            ghLink="https://github.com/ashvin-a/RISC-V-Processor-MPJ"
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
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
