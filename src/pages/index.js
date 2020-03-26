import React from "react";
import { Container, Row } from "react-bootstrap";


/////////IMPORT COMPONENTS
import Header from "../components/header";
import Aside from "../components/aside";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <Header />

      <Container fluid={true}>
        <Row>
          <Aside />

          {/* MAIN */}
          <main></main>
        </Row>
      </Container>
    </div>
  );
}

export default App;
