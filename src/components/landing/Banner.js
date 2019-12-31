import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg1 from '../../assets/img/generic/bg-1.jpg';
import dashboard from '../../assets/img/generic/dashboard-alt-light.png';
import Section from '../common/Section';

const Banner = () => {
  return (
    <Section className="py-0 overflow-hidden" image={bg1} position="center bottom" overlay>
      <Row className="justify-content-center align-items-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">
        <Col md={11} lg={8} xl={4} className="pb-7 pb-xl-9 text-center text-xl-left">
          <Button tag={Link} color="outline-danger" className="mb-4 fs--1 border-2x rounded-pill" to="#!">
            <span className="mr-2" role="img" aria-label="Gift">
              🎁
            </span>
            Become a pro
          </Button>
          <h1 className="text-white font-weight-light">
            Bring
            <Typed
              strings={['design', 'beauty', 'elegance', 'perfection']}
              typeSpeed={40}
              backSpeed={50}
              className="font-weight-bold pl-2"
              loop
            />
            <br />
            to your webapp
          </h1>
          <p className="lead text-400">
            With the power of Falcon, you can now focus only on functionaries for your digital products, while leaving
            the UI design on us!
          </p>
          <Link className="btn btn-outline-light border-2x rounded-pill btn-lg mt-4 fs-0 py-2" to="#!">
            Start building with the falcon
            <FontAwesomeIcon icon="play" transform="shrink-6 down-1 right-5" />
          </Link>
        </Col>
        <Col xl={{ size: 7, offset: 1 }} className="align-self-end">
          <Link to="/" className="img-landing-banner">
            <img className="img-fluid" src={dashboard} alt="" />
          </Link>
        </Col>
      </Row>
    </Section>
  );
};

export default Banner;
