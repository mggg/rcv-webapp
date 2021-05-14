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
        target="_blank"
        rel="noopener noreferrer"
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
    <>
      <Card className="model-card rounded" onClick={handleShow}>
        <Card.Img src={image} />
        <Card.Header className="d-flex align-items-baseline justify-content-between h-100">
          <h3>{title}</h3>
          <Card.Link onClick={handleShow}>Details</Card.Link>
        </Card.Header>
        {/* Modal with detailed information */}
      </Card>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title} Model Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            alt={`Schematic of the ${title} model`}
            src={image}
            className="float-left border model-card-image"
          />
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function AboutSection() {
  return (
    <section id="general-about">
      <h1>About This Work</h1>
      <p>
        Electoral systems can have a large impact on how voters are represented.
        One electoral system that has garnered attention the past few years is
        Ranked Choice Voting (RCV). This application aims to help users explore
        the impact RCV may have on representation.
      </p>{" "}
      <p>
        Building off the models introduced by Benade, Buck, Duchin, Gold and
        Weighill in{" "}
        <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3778021">
          "RCV and Minority Representation"
        </a>
        , this application exposes the inputs to those models in the form of a
        web application. By enabling a wide audience of users to see for
        themselves the impact RCV might have in the scenarios they craft, we
        hope to catalyze discussions about RCV's viability as a tool for
        diminishing voter dilution in minority populations.
      </p>
    </section>
  );
}

function ModelsSection() {
  return (
    <section id="models">
      <h1 className="mb-4">RCV Model Details</h1>
      <p>
        There are four RCV models that this application leverages:
        Plackett-Luce, Bradley-Terry, Cambridge Sampler, & Alternating
        Crossover. All the models take some basic inputs, namely the support
        from each group for each class of candidate (green- or
        purple-preferred), which should be numbers between 0 and 1. These values
        can be estimated by analyzing single-winner elections, inferred from
        survey results, or set to hypothetical values. Each model interprets
        these support values slightly differently, as detailed below.
      </p>
      <Row noGutters className="d-flex justify-around" id="model-cards">
        <Col
          sm={6}
          xs={12}
          className="mt-4 pl-2 pr-2 d-flex justify-content-center"
        >
          <ModelCard title="Plackett-Luce" description={pldesc} image={plbt} />
        </Col>
        <Col
          sm={6}
          xs={12}
          className="mt-4 pl-2 pr-2 d-flex justify-content-center"
        >
          <ModelCard title="Bradley-Terry" description={btdesc} image={plbt} />
        </Col>

        <Col
          sm={6}
          xs={12}
          className="mt-4 pl-2 pr-2 d-flex justify-content-center"
        >
          <ModelCard
            title="Cambridge Sampler"
            description={csdesc}
            image={cs}
          />
        </Col>
        <Col
          sm={6}
          xs={12}
          className="mt-4 pl-2 pr-2 d-flex justify-content-center"
        >
          <ModelCard
            title="Alternating Crossover"
            description={acdesc}
            image={ac}
          />
        </Col>
      </Row>
    </section>
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
        <p className="ml-4 mr-4 mb-5">
          Still curious? Dive into our codebases on GitHub, where you can find
          all of our code published as open-source software. Let us know about
          bugs you encounter, features you'd like, and how you are using our RCV
          simulation application.
        </p>
        <Row className="mt-4 mb-5">
          <ContributionComponent
            link="https://github.com/mggg/RCV_Basics"
            title="RCV Model Backend"
          >
            <GitHub size={60} />
          </ContributionComponent>
          <ContributionComponent
            link="https://mggg.org/work"
            title="MGGG Portfolio"
          >
            <MGGGLogo width="150px" className="pt-3 pb-3" />
          </ContributionComponent>
          <ContributionComponent
            link="https://github.com/mggg/rcv-webapp"
            title="RCV Webapp Frontend"
          >
            <GitHub size={60} />
          </ContributionComponent>
        </Row>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <Container id="about-page">
      <AboutSection />
      <hr className="mb-5 mt-5" />
      <ModelsSection />
      <LearnMoreSection />
    </Container>
  );
}

export default AboutPage;
