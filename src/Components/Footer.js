import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm/>
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/hagar-sultan-04a2811a9" target="blank">
                                <img src={navIcon1} alt="Icon" />
                            </a>

                            <a href="https://www.facebook.com/share/uHR4RbYEfhUc4LVi/?mibextid=qi2Omg" target="blank">
                                <img src={navIcon2} alt="Icon" />
                            </a>

                            <a href="https://www.instagram.com/hagar9224" target="blank">
                                <img src={navIcon3} alt="Icon" />
                            </a>
                        </div>
                        <p> Copyright &copy; All Rights Reserved Hagar
                            <sup>
                                <small>TM</small>
                            </sup>{" "}
                            2024
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};