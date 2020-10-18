import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import LuceModelParameters from "./LuceModelParameters";
import ParameterContainer from "./ParameterContainer";

function ModelParameters() {
  return (
    <>
      <h1>Model Parameters</h1>
      <ParameterContainer>
        <Tabs defaultActiveKey="luce">
          <Tab eventKey="luce" title="Luce">
            <LuceModelParameters />
          </Tab>
          <Tab eventKey="bradleyTerry" title="Bradley-Terry" disabled>
            <LuceModelParameters />
          </Tab>
          <Tab
            eventKey="alternatingCrossover"
            title="Alternating-Crossover"
            disabled
          >
            <LuceModelParameters />
          </Tab>
          <Tab eventKey="cambridgeSampler" title="Cambridge Sampler" disabled>
            <LuceModelParameters />
          </Tab>
        </Tabs>
      </ParameterContainer>
    </>
  );
}

export default ModelParameters;
