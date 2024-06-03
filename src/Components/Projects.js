import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ProjImg1 from "../assets/images/Project-img1.png";
import ProjImg2 from "../assets/images/Project-img2.png";
import ProjImg3 from "../assets/images/Project-img3.png";
import ProjImg4 from "../assets/images/Project-img4.png";
import ProjImg5 from "../assets/images/Project-img5.png";
import ProjImg6 from "../assets/images/Project-img6.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Restaurant website",
      description: "Design & Development",
      imgUrl: ProjImg1 ,
    },
    {
      title: "Shopping cart",
      description: "Design & Development",
      imgUrl: ProjImg2,
    },
    {
      title: "Defacto E-commerce website",
      description: "Design & Development",
      imgUrl: ProjImg3,
    },
    {
      title: "Furniture shop",
      description: "Design & Development",
      imgUrl: ProjImg4,
    },
    {
      title: "Kasper",
      description: "Design & Development",
      imgUrl: ProjImg5,
    },
    {
      title: "Calculator",
      description: "Design & Development",
      imgUrl: ProjImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I’m a passionate web developer with 6+ months of experience
                    in creating dynamic and user-friendly websites. My expertise
                    lies in front-end development programming, and
                    responsive design. I thrive on solving complex problems and
                    turning ideas into functional, elegant solutions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          <Row>
                            <label className="text-start">Your Email</label>
                            <input
                              type="text"
                              placeholder="your email account"
                            />
                            <label className="text-start">Subject</label>
                            <select
                              type="text"
                              placeholder="your email account"
                            >
                              <option value="0" key="0">
                                Select Category......
                              </option>
                              <option value="0" key="0">
                                Portfolio
                              </option>
                              <option value="0" key="0">
                                Woo Commence
                              </option>
                              <option value="0" key="0">
                                E-store
                              </option>
                              <option value="0" key="0">
                                Management Tools
                              </option>
                            </select>
                            <label className="text-start">
                              more Specifications
                            </label>
                            <input
                              type="text"
                              placeholder="your email account"
                            />
                          </Row>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p className="text-start">
                          <h3>Our team are talented in:</h3>
                          <ul style={{ listStyle: "number" }}>
                            <li>
                              <b>HTML/CSS: </b>Proficient in creating clean,
                              semantic HTML and CSS code.
                            </li>
                            <li>
                              <b>JavaScript: </b> Skilled in building
                              interactive web applications using modern
                              frameworks like React.
                            </li>
                            
                            <li>
                              <b>Version Control: </b> Git and GitHub for
                              collaborative development.
                            </li>
                            <li>
                              <b>Responsive Design: </b> Ensuring seamless user
                              experiences across devices.
                            </li>
                          </ul>
                          <h3 className="text-start">Projects:</h3>
                          <ul style={{ listStyle: "none" }}>
                            <li>
                              <b>E-Commerce Website: </b>Developed a fully
                              responsive online store with product listings,
                              cart functionality, and secure checkout.
                            </li>
                            <li>
                              <b>Portfolio Website: </b>Designed a personal
                              portfolio showcasing my work, skills, and contact
                              information.
                            </li>
                            <li>
                              <b>Restaurant Website: </b>Created a Restaurant Website
                              using Html and css, allowing clients to order
                              suitable and delicious food.
                              </li>
                              <li>
                              <b>Shopping Cart: </b>Developed a fully
                              responsive online store with product listings,
                              cart functionality, and secure checkout.
                              </li>
                              <li>
                              <b>Furniture Shop: </b>Developed a fully
                              responsive retail store that specializes in selling
                              furniture, such as sofas, tables, chairs, beds,
                              and other home furnishings.
                              </li>
                              <li>
                              <b>Calculator: </b>is a device or tool used to 
                              perform mathematical calculations.
                              </li>
                        </ul>
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};