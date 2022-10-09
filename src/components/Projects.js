import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import SocialMediaImg from "../assets/img/SocialMedia.jpg";
import Alumnos from "../assets/img/Alumnos.jpg";
import Morse from "../assets/img/Morse.jpg";

import CRUDjsp from "../assets/img/CRUDjsp.png";
import Tickets from "../assets/img/BisonBillet.jpg";
import Pharmacy from "../assets/img/pharmacy.jpg";

import GaussImg from "../assets/img/gauss-jordan.png";
import FalsePositionImg from "../assets/img/reglaFalsa.png";
import InterpolationImg from "../assets/img/InterpolacionUnico.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from "react-i18next";
export const Projects = () => {
  const [t,i18n]=useTranslation("global");
  const Mathprojects = [
    {
      title: t("projects.Math1"),
      description: "WinForms C#",
      imgUrl: GaussImg,
    },
    {
      title: t("projects.Math2"),
      description: "WinForms C#, AngouriMath,  WPF Math",
      imgUrl: FalsePositionImg,
    },
    {
      title: t("projects.Math3"),
      description: "WinForms C#, AngouriMath,  WPF Math",
      imgUrl: InterpolationImg,
    }
  ];

  const Mobileprojects = [
    {
      title: t("projects.Mobile1"),
      description: "Ionic/Angular, Capacitor, Firebase",
      imgUrl: SocialMediaImg,
    },
    {
      title: t("projects.Mobile2"),
      description: "Ionic/Angular, Capacitor",
      imgUrl: Morse,
    },
    {
      title: t("projects.Mobile3"),
      description: "Ionic/Angular, Capacitor, Firebase",
      imgUrl: Alumnos,
    }
  ];
  const Desktopprojects = [
    {
      title: t("projects.Desktop1"),
      description: "WinForms C#, Bunifu, Microsoft SQL Server",
      imgUrl: Tickets,
    },
    {
      title: t("projects.Desktop2"),
      description: "Java Server Pages, MySQL",
      imgUrl: CRUDjsp,
    },
    {
      title: t("projects.Desktop3"),
      description: "Java, Swing, MySQL",
      imgUrl: Pharmacy,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{t("navbar.projects")}</h2>
                <p>{t("projects.intro")}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Mobile Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Information Systems</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Math Apps</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    
                    <Row>
                        {
                          Mobileprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          Desktopprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          Mathprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
