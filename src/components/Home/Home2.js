import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/main.png';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: '2.6em' }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            A tech & fitness enthusiast interested in
                            <b className="purple"> Robotics, Electronics</b> and <b className="purple">Coding </b>.🤖📈
                            <br />
                            <br />
                            Being influenced by <b className="purple">Dr.APJ Abdul Kalam</b>, my dream is to revolutionize the application of Robotics and Intelligent Systems in <b Indian className="purple">Indian Space Programs</b>.
                            <br />
                            <br />
                            I'm known among my peers for my ability to formulate <b className="purple"> creative solutions </b>and <b className="purple">analytical skills</b>.
                            <br />
                            <br />I am fluent in programming languages such as
                            <i>
                                <b className="purple"> Python, Javascript </b>and<b className="purple"> C++ </b>.
                            </i>
                            <br />
                            <br />
                            During my free time, I often hang out with my friends, sometimes go for a solo ride, or learn new things and build cool projects.
                            <br />
                            <br />
                            My hobbies include weight lifting, photography and occasionally playing my piano and guitar. 
                            <br />
                            <br />
                            <i>
                            </i>
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
                                    href="https://www.linkedin.com/in/ashvin-a-261690199/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
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
