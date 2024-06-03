import { useState , useEffect } from "react";
import { Navbar , Nav , Container, NavLink } from "react-bootstrap";
import logo from '../assets/images/logo.svg';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
import { BrowserRouter as Router } from "react-router-dom";
import 'animate.css';

export const NavBar = () => {
  const [activelink , setActiveLink] = useState('home');
  const [scrolled , setScrolled] = useState(false);

  useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll",onScroll);
    } , []);

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    };

    return (
      <Router>
        <Navbar expand="lg" bg="darker" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src= {logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"  className={activelink === 'home' ? 'active-navbar-link' : 'navbar-link'}
             onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activelink === 'skills' ? 'active-navbar-link' : 'navbar-link'}
             onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activelink === 'projects' ? 'active-navbar-link' : 'navbar-link'}
             onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/hagar-sultan-04a2811a9"><img src={navIcon1} alt=""/></a>
                <a href="https://www.facebook.com/share/uHR4RbYEfhUc4LVi/?mibextid=qi2Omg"><img src={navIcon2} alt=""/></a>
                <a href="https://www.instagram.com/hagar9224"><img src={navIcon3} alt=""/></a>
              </div>
              <Nav.Link href="#connects" className={activelink === 'connects' ? "active-navbar-link": "navbar-link"}
              onClick={()=> onUpdateActiveLink ('connects')}>
              <button className="vvd" onClick={()=> console.log('connect')}>
                <span>Let's Connect</span>
                </button>
              </Nav.Link>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
  );
    };









