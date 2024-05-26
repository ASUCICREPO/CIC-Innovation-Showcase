import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ContactInfo,
  MarketingFooterBrand,
  NavBarHeader2,
} from "../ui-components/index";
import {
  Contacts
} from "../components/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="contact-page">
      <NavBarHeader2
        width="100%"
        overrides={{
          Button7873: { as: "button", onClick: () =>  navigate("/about")},
          Button7889: { as: "button", onClick: () =>  navigate("/contact")},
          }}
      />
        <Container className="full-height-container">
          <Row className="contact-section">
            <Col md="4" xs="12">
              <ContactInfo className="contact-info" />
            </Col>
            <Col md="8" xs="12">
              <Contacts/>
            </Col>
          </Row>
        </Container>
        <MarketingFooterBrand width="100%"/>
      </div>
    </>
  );
};

export default Contact;
