import React from "react";
import { Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid"

////////ITEMS
const items = [
  {
    type: 'apple mac book 15" 250 SSD 12GB',
    price: 73430,
    transactionNo: 1234567890,
    time: "12:30",
    category: "reconciled"
  },
  {
    type: 'apple mac book 15" 250 SSD 12GB',
    price: 73430,
    transactionNo: 1234567890,
    time: "12:30",
    category: "un-reconciled"
  },
  {
    type: 'apple mac book 15" 250 SSD 12GB',
    price: 73430,
    transactionNo: 1234567890,
    time: "12:30",
    category: "pending"
  },
  {
    type: 'apple mac book 15" 250 SSD 12GB',
    price: 73430,
    transactionNo: 1234567890,
    time: "12:30",
    category: "settled"
  },
  {
    type: 'apple mac book 15" 250 SSD 12GB',
    price: 73430,
    transactionNo: 1234567890,
    time: "12:30",
    category: "unsettled"
  }
];

const tableHead = ["item type", "price", "transaction no", "time", "category"];

const getTableBody = items => (
  <Row as="tr">
    {items.map(({ type, transactionNo, category, price, time }) => (
      <React.Fragment key={uuidv4()}>
        <Col as="td" className=""> {type} </Col>
        <Col as="td"> ${price} </Col>
        <Col as="td"> {transactionNo} </Col>
        <Col as="td"> {time} </Col>
      </React.Fragment>
    ))}
  </Row>
);

const ItemsTable = () => {
  return (
    <>
      <Col as="thead" className="col-12">
        <Row as="tr">
          {tableHead.map(item => (
            <Col as="th" className="col"> {item} </Col>
          ))}
        </Row>
      </Col>

      <Col as="tbody"  className="col-12">{getTableBody(items)}</Col>
    </>
  );
};

export default ItemsTable;
