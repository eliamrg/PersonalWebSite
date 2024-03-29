import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import {useState} from 'react'

//ELLIE
import Login from "../assets/img/Ellie-Login.jpg" ;
import CreateAccount from "../assets/img/Ellie-CreateAccount.jpg" ;
import Home from "../assets/img/Ellie-Home.jpg" ;
import License from "../assets/img/Ellie-License.jpg" ;
import Messages from "../assets/img/Ellie-Messages.jpg" ;
import Notifications from "../assets/img/Ellie-Notifications.jpg" ;
import Post from "../assets/img/Ellie-Post.jpg" ;
import Profile from "../assets/img/Ellie-Profile.jpg" ;
import Settings from "../assets/img/Ellie-Settings.jpg" ;

//MOBILE APPS
import SocialMediaImg from "../assets/img/SocialMedia.jpg";
import Alumnos from "../assets/img/Alumnos.jpg";
import Morse from "../assets/img/Morse.jpg";


//DESKTOP APPS
import CRUDjsp from "../assets/img/CRUDjsp.png";
import Tickets from "../assets/img/BisonBillet.jpg";
import Pharmacy from "../assets/img/pharmacy.jpg";
import Anova from  "../assets/img/ANOVA.png";

import GaussImg from "../assets/img/gauss-jordan.png";
import FalsePositionImg from "../assets/img/reglaFalsa.png";
import InterpolationImg from "../assets/img/InterpolacionUnico.png";

import Tsp from "../assets/img/TSPCapture.jpg";



import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from "react-i18next";



export const Projects = () => {
  const [t,i18n]=useTranslation("global");

   var projects1Shown=3;
   var projects2Shown=3;
   var projects3Shown=3;

  const SocialMediaProject = [
    {
      title: t("projects.Ellie-Login"),
      description: "Angular/Ionic, Firebase",
      imgUrl: Login,
    },
    
    {
      title: t("projects.Ellie-Home"),
      description: "Angular/Ionic, Firebase",
      imgUrl: Home,
    },
    {
      title: t("projects.Ellie-Profile"),
      description: "Angular/Ionic, Firebase",
      imgUrl: Profile,
    },
    {
      title: t("projects.Ellie-Messages"),
      description: "Angular/Ionic, Firebase",
      imgUrl: Messages,
    },
    {
      title: t("projects.Ellie-Posts"),
      description: "Angular/Ionic, Firebase",
      imgUrl: Post,
    },
    
    {
      title: t("projects.Ellie-Notifications"),
      description: "Angular/Ionic, Firebase",
      imgUrl: Notifications,
    },
    {
      title: t("projects.Ellie-Settings"),
      description: "Angular/Ionic, Firebase",
      imgUrl: Settings,
    },
    {
      title: t("projects.Ellie-License"),
      description: "Angular/Ionic, Firebase",
      imgUrl: License,
    },

    {
      title: t("projects.Ellie-CreateAccount"),
      description: "Angular/Ionic, Firebase",
      imgUrl: CreateAccount,
    },
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
      title: t("projects.Desktop2"),
      description: "Java Server Pages, MySQL",
      imgUrl: CRUDjsp,
    },
    {
      title: t("projects.Tsp"),
      description: "Angular/Ionic",
      imgUrl: Tsp,
    },
    {
      title: "ANOVA",
      description: "WinForms C#",
      imgUrl: Anova,
    },
    
    {
      title: t("projects.Math3"),
      description: "WinForms C#, AngouriMath,  WPF Math",
      imgUrl: InterpolationImg,
    },
    {
      title: t("projects.Math2"),
      description: "WinForms C#, AngouriMath,  WPF Math",
      imgUrl: FalsePositionImg,
    },
    {
      title: t("projects.Desktop1"),
      description: "WinForms C#, Bunifu, Microsoft SQL Server",
      imgUrl: Tickets,
    },
    
    {
      title: t("projects.Desktop3"),
      description: "Java, Swing, MySQL",
      imgUrl: Pharmacy,
    },
    {
      title: t("projects.Math1"),
      description: "WinForms C#",
      imgUrl: GaussImg,
    },
    
    
  ];


  const imagePerRow = 3;

  const [next1, setNext1] = useState(imagePerRow);
  const handleMoreImage1 = () => {
      setNext1(next1 + imagePerRow);
    };

    const [next2, setNext2] = useState(imagePerRow);
    const handleMoreImage2 = () => {
        setNext2(next2 + imagePerRow);
      };

    const [next3, setNext3] = useState(imagePerRow);
    const handleMoreImage3 = () => {
        setNext3(next3 + imagePerRow);
      };

  function LoadMore(i) {
    switch (i) {
      case 1:
        
        projects1Shown+=3;
        alert(projects1Shown);
        break;
      case 2:
        projects2Shown+=3;
        alert(projects2Shown);
        break;
      case 3:
        projects3Shown+=3;
        alert(projects3Shown);
      break;
      default:
        alert("ERROR");
    }
  }

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
                      <Nav.Link eventKey="first">{t("projects.Tab1")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">{t("projects.Tab2")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">{t("projects.Tab3")}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    
                    <Row>
                        {
                          SocialMediaProject.slice(0, next1)?.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                                
                            )
                          })
                        }
                        <button onClick={handleMoreImage1}>
                          <span>{t("projects.LoadMore")}</span>
                        </button> 
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          Mobileprojects.slice(0, next2)?.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        <button onClick={handleMoreImage2}>
                          <span>{t("projects.LoadMore")}</span>
                        </button> 
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          Desktopprojects.slice(0, next3)?.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        <button onClick={handleMoreImage3}>
                          <span>{t("projects.LoadMore")}</span>
                        </button> 
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
