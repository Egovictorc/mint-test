import React from "react";
import { Container, Row, Col } from "react-bootstrap";


///////////IMPORT GRAPHS / IMAGES
import dailyTransVol from "../images/daily-trans-vol.png";
import dailyTransValue from "../images/daily-trans-val.png";
import totalTransVol from "../images/total-trans-vol.png";
import totalTransValue from "../images/total-trans-val.png";

import monthlyGraph from "../images/total-trans-val.png"


const transactionArray = [
  { title: "daily transaction volume", img: dailyTransVol },
  { title: "daily transaction value", img: dailyTransValue },
  { title: "total transaction volume", img: totalTransVol },
  { title: "total transaction value", img: totalTransValue }
];

const getTransactions = transactions =>
  transactions.map(({ title, img }) => (
    <Col key={title} className="">
      <img src={img} alt={title} />
    </Col>
  ));

const Main = () => {
  return (
    <Col className="main" as="main">
      <Row>
    {getTransactions(transactionArray)}
      </Row>

    </Col>
  );
};

export default Main;
