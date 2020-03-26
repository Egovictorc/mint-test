import React from "react";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";

//////////IMPORT TRANSACTIONS
import Transactions from "./transactions";
//////////IMPORT PAYMENTS
import Payments from "./payments";

const Main = () => {
  return (
    <Col className="main" as="main">
      <Transactions />

      <Payments />
    </Col>
  );
};

export default Main;
