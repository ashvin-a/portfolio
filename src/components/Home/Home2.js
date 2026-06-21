import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/rocket.svg';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { SiGooglescholar} from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: '2.6em' }}>
                            Bridging the gap between <span className="purple">Simulation</span> and <span className="purple">Reality</span>
                        </h1>
                        <p className="home-about-body">
                            I'm a robotics researcher and MS student at the
                            <b className="purple"> University of Wisconsin–Madison</b>, working in the{" "}
                            <b className="purple">Prediction-Action Laboratory</b> under Prof. Josiah Hanna.
                            <br />
                            <br />
                            My research focuses on{" "}
                            <b className="purple">Robot Learning</b>,{" "}
                            <b className="purple">Robotic Perception</b>, and{" "}
                            <b className="purple">Sim-to-Real Transfer</b> — building autonomous systems
                            that learn robust behaviors in simulation and deploy reliably in the physical world.
                            <br />
                            <br />
                            Inspired by the visionary <b className="purple">Dr. APJ Abdul Kalam</b>, I aspire
                            to advance the application of intelligent robotics in{" "}
                            <b className="purple">space exploration</b> and other high-stakes domains.
                            <br />
                            <br />
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <img src={myImg} className="img-fluid" alt="avatar"
                        style={{maxHeight: "450px"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/ashvin-a"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/AshvinA001"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/ashvin-anilkumar/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://scholar.google.com/citations?user=SA0MzSwAAAAJ&hl=en"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <SiGooglescholar />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
