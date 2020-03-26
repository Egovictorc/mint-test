import React from "react";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaAngleRight, FaAngleLeft, FaAngleDown } from "react-icons/fa";

///////////IMPORT GRAPHS / IMAGES
import dailyTransVol from "../images/daily-trans-vol.png";
import dailyTransValue from "../images/daily-trans-val.png";
import totalTransVol from "../images/total-trans-vol.png";
import totalTransValue from "../images/total-trans-val.png";

import bigGraph from "../images/big-graph.png";
import line from "../images/line.png";

////////// TRANSACTIONS ARRAY
const transactionArray = [
  { title: "daily transaction volume", img: dailyTransVol },
  { title: "daily transaction value", img: dailyTransValue },
  { title: "total transaction volume", img: totalTransVol },
  { title: "total transaction value", img: totalTransValue }
];

///////////GET TRANSACTIONS
const getTransactions = transactions =>
  transactions.map(({ title, img }) => (
    <Col key={title} className="">
      <img src={img} alt={title} className="transaction" />
    </Col>
  ));

/////////MONTHS ARRAY
const monthsArray = ["jan", "feb", "mar", "apr", "may", "jun"];

//////////GET MONTHS
const getMonths = monthsArray => (
  <ul className="month__list">
    {monthsArray.map(month => (
      <li key={month} className="month__item">
        {" "}
        {month}{" "}
      </li>
    ))}
  </ul>
);

///////////ORDERS
const orders = [
  { title: "pending orders", value: 20, className: "warning" },
  { title: "reconciled orders", value: 80, className: "success" },
  { title: "total orders", value: 100, className: "info" }
];

///////////PAYMENTS
const payments = [
  { title: "unreconciled payments", value: 20, className: "warning" },
  { title: "reconciled payments", value: 80, className: "success" },
  { title: "total payments", value: 100, className: "info" }
];

/////////////GET ITEMS
const getItems = itemsArray =>
  itemsArray.map(({ title, value, className }) => (
    <li key={title}>
      {" "}
      {title}:<span className={className}> {value} </span>
    </li>
  ));

const Main = () => {
  return (
    <>
      <Row>{getTransactions(transactionArray)}</Row>

      <Row className="">
        <Col className="date__col col-8 bg-white">
          <Row className="align-items mb-4 pt-3">
            <Col as="span" className="date mr-auto">
              {" "}
              today: 5, Aug 2018{" "}
            </Col>

            <Col className="date__col col-4">
              <InputGroup>
                <FormControl placeholder="1 jan - 1 jun" aria-label="date" />

                <InputGroup.Append>
                  <InputGroup.Text>
                    <FaAngleDown />
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>

            <Col className="col-4 col-xl-3">
              <Button className="angle-btn">
                <FaAngleLeft />
              </Button>

              <Button className="angle-btn">
                <FaAngleRight />
              </Button>
            </Col>
          </Row>

          <Row className="">
            <Col className="col-12 month-graph-container">
              {getMonths(monthsArray)}

              <div className="month-graph">
                <img src={bigGraph} alt="month graph" className="w-100 h-100" />
              </div>
            </Col>
          </Row>
        </Col>

        <Col className="">
          <ul className="orders__list">
            <li>
              orders
              <div>
                <img src={line} alt="line" className="img-fluid" />
              </div>
            </li>
            {getItems(orders)}
          </ul>

          <ul className="payments__list">
            <li>
              {" "}
              payments
              <div>
                <img src={line} alt="line" className="img-fluid" />
              </div>
            </li>
            {getItems(payments)}
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Main;
