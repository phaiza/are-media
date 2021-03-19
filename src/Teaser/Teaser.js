import React from "react";
import Image from "react-bootstrap/Image";
import "./teaser.scss";
import { Container, Col, Row } from "react-bootstrap";

const Teaser = (props) => {
  const { teaser } = props;
  return (
    <Col md={6} xs={12}>
      <div className="teaser">
        <Image
          src={teaser.contentImageUrl}
          fluid
          rounded
          className="teaser__image"
        />
        <h2 className="teaser__title">{teaser.contentTitle}</h2>
        <p className="teaser__summary">{teaser.contentSummary}</p>
      </div>
    </Col>
  );
};

export default Teaser;
