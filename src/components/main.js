import React from "react";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";

//////////IMPORT TRANSACTIONS
import Transactions from "./transactions"
 

const Main = () => {
  return (
    <Col className="main" as="main">
      <Transactions />

    </Col>
  );
};

export default Main;
