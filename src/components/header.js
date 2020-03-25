import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

///////////IMPORT IMAGES
import search from "../images/Search.png";
import bell from "../images/bell.png";
import avatar from "../images/avatar.png";

export const Header = () => {
  return (
    <Container fluid={true} as="header" className="header">
      <Row className="header__row">
        <Col as="h1" className="title col-auto">
          TransMonitor
        </Col>

        <Col className="search__col col-4">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <img src={search} alt="search" />{" "}
              </InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl placeholder="search..." aria-label="search" />
          </InputGroup>
        </Col>

        <Col as="ul">
          <li>support</li>
          <li>FAQ</li>
          <li>
            <img src={bell} alt="bell" />
          </li>
          <li className="avatar__item d-flex">
            <div className="text-right">
              <small> hello </small>
              <p> oluwaleke ojo</p>
            </div>

            <div className="avatar-container">
              <img src={avatar} alt="avatar" className="avatar" />
            </div>
          </li>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
