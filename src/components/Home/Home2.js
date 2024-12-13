import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/rocket.svg';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: '2.6em' }}>
                            Welcome to my world of <span className="purple">Innovation</span> and <span className="purple">Creativity</span>!
                        </h1>
                        <p className="home-about-body">
                            I'm a tech & fitness enthusiast interested in
                            <b className="purple"> Robotics, Electronics</b> and <b className="purple">Coding </b>.🤖📈
                            <br />
                            <br />
                            Inspired by the visionary<b className="purple"> Dr.APJ Abdul Kalam</b>, my dream is to revolutionize the application of Robotics and Intelligent Systems in <b Indian className="purple">Indian Space Programs</b>.
                            <br />
                            <br />
                            Known among my peers for my<b className="purple"> creativity </b>and <b className="purple">analytical skills</b>, I thrive on developing innovative solutions to complex challenges.
                            <br />
                            <br />
                            In my free time, you'll find me exploring new skills, building exciting projects, hanging out with friends, or embarking on a solo ride.
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
