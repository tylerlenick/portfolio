import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import AboutImg from '../Image/AboutImg';
import Typical from 'react-typical'


const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { img, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className="hero-title">
                <span className="text-color-main">{name || 'Tyler Lenick'}</span>
                <br />
                <Typical steps={["Hi, I'm Tyler", 1000, "Full Stack Developer, living in Atlanta.", 5000]}/>
              </h1>
            </Fade>

            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero">
                  <Link to="about" smooth duration={1000}>
                    {cta || 'Know more'}
                  </Link>
                </span>
              </p>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <div className="rounded-circle">
              <AboutImg alt="profile picture" filename={img} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
