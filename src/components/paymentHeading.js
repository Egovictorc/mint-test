import React from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import Select from "react-select"
import { FaAngleDown } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

const categories = [
    "all",
    "reconciled",
    "un-reconciled",
    "settled",
    "unsettled"
  ];
  
  const getCategories = categories =>
    categories.sort().map(category => (
      <option key={category} value={category} name={category} className="category">
        {" "}
        {category}{" "}
      </option>
    ));

    

const PaymentHeading = ({handleChange, selectedCategory}) => {
  return (
    <>
      <h3 className="payments__heading">payments</h3>
      <Row className="payments">
        <Col className="d-flex col-5 align-items-center">
          <span> showing</span>
          <InputGroup>
            <FormControl
              placeholder="20"
              aria-label="number of items"
              className="show"
            />

            <InputGroup.Append>
              <InputGroup.Text>
                <FaAngleDown />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>

          <span> out of 500 payments</span>
        </Col>

        <Col>
          <InputGroup className="search">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <MdSearch />
              </InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl
              placeholder="search payments"
              aria-label="search payments"
            />
          </InputGroup>
        </Col>

        <Col className="d-flex">
          <label htmlFor="category"> show</label>

          <select
            aria-label="items category"
            id="category"
            className="categories form-control"
            onChange={(e) => handleChange(e)}
            value={selectedCategory.value}
            name={selectedCategory.name}
          >
            {getCategories(categories)}
          </select>
        </Col>
      </Row>
    </>
  );
};

export default PaymentHeading;
