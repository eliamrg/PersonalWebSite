import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/DesktopGuy.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from "react-i18next";


export const Banner = () => {
  const [t,i18n]=useTranslation("global");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [t("banner.title-rotate1"), t("banner.title-rotate2"), t("banner.title-rotate3")  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

   //As you could read I'm a developer, or at least I try. I'm currently in college studying computer science. I have some experience developing (c, c++, c#, java, typescript, javascript, Angular, Ionic, SQL Server, Firebase, etc). Also I have work a litle bit using Azure tables and Blob Containers on a Storage Acount with .Net.

  return (
    
    <section className="banner" id="home">
      <Container>
      
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">{t("banner.welcome")}</span>
                <h1>{t("banner.title")} <span className="txt-rotate" dataPeriod="1000" data-rotate={t("banner.title-rotate")}><span className="wrap">{text}</span></span></h1>
                  <p className="banner.text">
                  
                  <br></br>
                  {t("banner.intro1")} 
                  <br></br>
                  {t("banner.intro2")} 
                  <br></br>
                  <a href = "mailto:santiago.rg@live.com">{t("banner.email")} </a>
                  <br></br><br></br>
                  {t("banner.proeficient")}
                  <br></br>
                  {t("banner.competent")} 
                  <br></br>
                  {t("banner.familiar")}  
                  </p>
                  <button onClick={() => console.log('connect')}>{t("navbar.connect")} <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
