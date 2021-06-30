import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header_link header_title"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              FrontEnd
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="header_link"
              to="/pictures"
              activeClassName="header_link--active"
            >
              <span className="header_link--active">Redux</span>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
