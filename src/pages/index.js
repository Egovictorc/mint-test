import React from "react";
import { Container, Row } from "react-bootstrap";

/////////IMPORT COMPONENTS
import Header from "../components/header";
import Aside from "../components/aside";
import Main from "../components/main";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <Header />

      <Container fluid={true}>
        <Row>
          <Aside />

          {/* MAIN */}
          <Main />
        </Row>
      </Container>
    </div>
  );
}

export default App;
