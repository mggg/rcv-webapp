import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { GitHub } from "react-feather";
// Images
import ac from "../images/ac.png";
import cs from "../images/cs.png";
import plbt from "../images/pl-bt.png";
import { ReactComponent as MGGGLogo } from "../images/mggg.svg";
import { ReactComponent as Swoop } from "../images/swoop.svg";
// Descriptions from file
import { pldesc, btdesc, csdesc, acdesc } from "./modelDescriptions";
import "../styles/aboutPage.scss";

function ContributionComponent({ link, title, children, className }) {
  return (
    <Col xs={6} sm={4} className={`ml-auto mr-auto ${className}`}>
      <a
        className="d-flex justify-content-center flex-wrap text-center"
        href={link}
      >
        {children}
        <div className="w-100">
          <h3 className="font-basic">{title}</h3>
        </div>
      </a>
    </Col>
  );
}

function ModelCard({ image, title, description }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className="model-card rounded" onClick={handleShow}>
      <Card.Img src={image} />
      <Card.Header className="d-flex  align-items-baseline justify-content-between">
        <h3>{title}</h3>
        <Card.Link onClick={handleShow}>Details</Card.Link>
      </Card.Header>
      {/* Modal with detailed information */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

function LearnMoreSection() {
  return (
    <>
      <div id="wave-container">
        <Swoop />
      </div>
      <section id="learn-more" className="text-center pb-4">
        <h1 className="mb-4"> Learn More </h1>
        <p className="ml-4 mr-4">
          Still curious? Dive into our codebases on GitHub, where you can find
          all of our code published as open-source software. Let us know about
          bugs you encounter, features you'd like, and how you are using our RCV
          simulation application.
        </p>
        <Row className="mt-4">
          <ContributionComponent
            link="https://github.com/dtphelan1/RCV_Basics"
            title="RCV Model Backend"
          >
            <GitHub size={60} />
          </ContributionComponent>
          <ContributionComponent
            link="https://github.com/dtphelan1/RCV_Basics"
            title="More MGGG Work"
          >
            <MGGGLogo width="150px" className="pt-3 pb-3" />
          </ContributionComponent>
          <ContributionComponent
            link="https://github.com/dtphelan1/rcv-webapp"
            title="Application Frontend"
          >
            <GitHub size={60} />
          </ContributionComponent>
        </Row>
      </section>
    </>
  );
}

function ModelsSection() {
  return (
    <section id="models">
      <h1 className="text-center mb-4">RCV Model Details</h1>
      <Row>
        <Col
          lg={3}
          sm={6}
          xs={12}
          className="mt-4 d-flex justify-content-center"
        >
          <ModelCard title="Plackett-Luce" description={pldesc} image={plbt} />
        </Col>
        <Col
          lg={3}
          sm={6}
          xs={12}
          className="mt-4 d-flex justify-content-center"
        >
          <ModelCard
            title="Cambridge Sampler"
            description={csdesc}
            image={cs}
          />
        </Col>
        <Col
          lg={3}
          sm={6}
          xs={12}
          className="mt-4 d-flex justify-content-center"
        >
          <ModelCard
            title="Alternating Crossover"
            description={acdesc}
            image={ac}
          />
        </Col>
        <Col
          lg={3}
          sm={6}
          xs={12}
          className="mt-4 d-flex justify-content-center"
        >
          <ModelCard title="Bradley-Terry" description={btdesc} image={plbt} />
        </Col>
      </Row>
    </section>
  );
}

function NewAboutPage() {
  return (
    <Container>
      <h1>About This Work</h1>
      <ModelsSection />
      <LearnMoreSection />
    </Container>
  );
}

export default NewAboutPage;
