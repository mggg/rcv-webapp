import React from "react";
import { Nav, Card, Row } from "react-bootstrap";

import ResetButton from "./ResetButton";
import GenericInput from "../inputs/GenericInput";

function TabbedInputParametersCard({
  filterInputsBySelectedTab,
  formData,
  formInputs,
  formTitle,
  resetData,
  selectedTab,
  setFormData,
  setSelectedTab,
  tabs,
}) {
  return (
    <>
      <div className="d-flex">
        <h1>{formTitle}</h1>
        <ResetButton onClick={resetData} />
      </div>
      <Card className="parameter-container">
        <Card.Header>
          <Nav
            variant="tabs"
            defaultActiveKey={selectedTab}
            onSelect={(keyForEachTab) => {
              setSelectedTab(keyForEachTab);
            }}
          >
            {tabs.map((tab) => (
              <Nav.Item key={tab.id}>
                <Nav.Link eventKey={tab.display}>{tab.display}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Card.Header>
        <Row as={Card.Body} noGutters className="align-content-start">
          {filterInputsBySelectedTab(formInputs, selectedTab).map((param) => (
            <GenericInput
              key={param.id}
              param={param}
              formData={formData}
              setFormData={setFormData}
            />
          ))}
        </Row>
      </Card>
    </>
  );
}

export default React.memo(TabbedInputParametersCard);
