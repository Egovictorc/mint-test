import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import symbol from "../images/vw-symbol.png"


const tableHead = ["item type", "price", "transaction no", "time", "category"];

const getTableBody = items => (
    items.map(({ type, transactionNo, category, price, time }) => (
      <tr key={uuidv4()}>
        <td className="">
        <img src={symbol} alt=" vw symbol" />
          {type}{" "}
              
        </td>
        <td> ${price} </td>
        <td> {transactionNo} </td>
        <td> {time} </td>
        <td className="category" > 
        <span> {category}</span> </td>
      </tr>
    ))
);

const ItemsTable = ({items}) => {

    return (
    <Table striped borderless hover className="item-table">
      <thead>
        <tr>
          {tableHead.map(item => (
            <th key={uuidv4()}> {item} </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {getTableBody(items)}
      </tbody>
    </Table>
  );
};

export default ItemsTable;
