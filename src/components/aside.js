import React from "react";
import { Link } from "react-router-dom";
import classname from "classnames";
import { Col, Button } from "react-bootstrap";

////////IMPORT IMAGES
import allPayments from "../images/all-payments.png";
import reconciledPayments from "../images/reconciled-payments.png";
import unreconciledPayments from "../images/unreconciled-payments.png";
import settlement from "../images/manual-settlement.png";

import allOrders from "../images/all-orders.png";
import pendingOrders from "../images/pending-orders.png";
import reconciledOrders from "../images/reconciled-orders.png";
import merchant from "../images/merchant-profile.png";

import overview from "../images/overview.png";


///////////////MAIN ARRAY
const main = [{ title: "overview", icon: overview, active: true }];


///////////////PAYMENTS ARRAY
const payments = [
  { title: "all payments", icon: allPayments },
  { title: "reconciled payments", icon: reconciledPayments },
  { title: "un - reconciled payments", icon: unreconciledPayments },
  { title: "manual settlement", icon: settlement }
];

////////////////ORDERS ARRAY
const orders = [
  { title: "all orders", icon: allOrders },
  { title: "pending orders", icon: pendingOrders },
  { title: "reconciled orders", icon: reconciledOrders },
  { title: "merchant profile", icon: merchant }
];



const getItems = itemsArray =>
  itemsArray.map(({ title, icon, ...props }) => {

    console.log("props ", props)
      return (
        <li key={title} className={classname(props.active && "active")}>
          <Link to="/">
            <img src={icon} alt={title} />
            <span> {title} </span>
          </Link>
        </li>
      )
  });

const Aside = () => (
    <Col className="aside col-4 col-md-3">
      <Button variant="success" className="invoice-btn">
        generate invoice
      </Button>

      {/* MAIN LIST*/}
      <ul>
        <li>main</li>
        {getItems(main)}
      </ul>

      {/* PAYMENTS LIST*/}
      <ul>
        <li>payments</li>
        {getItems(payments)}
      </ul>

      {/* ORDERS LIST*/}
      <ul>
        <li>orders</li>
        {getItems(orders)}
      </ul>
    </Col>
  );


export default Aside;
