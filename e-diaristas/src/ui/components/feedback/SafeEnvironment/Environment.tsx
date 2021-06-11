import React from "react";
import { EnvironmentContainer } from "./Environment.style";
import { Container } from "@material-ui/core";

const Environment = () => {
  return (
    <EnvironmentContainer>
      <Container>
        Ambiente seguro <i className={"twf-lock"} />
      </Container>
    </EnvironmentContainer>
  );
};

export default Environment;
