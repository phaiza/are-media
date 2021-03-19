import React from "react";
import Image from "react-bootstrap/Image";
import "./teaser.scss";
import { Col } from "react-bootstrap";

const Teaser = (props) => {
  const { teaser, featuredPost } = props;
  if (featuredPost) {
    return (
      <Col xs={12} sm={12} lg={6}>
        <div className="teaser">
          <Image
            src={teaser.contentImageUrl}
            fluid
            rounded
            className="teaser__image teaser__image-tablet"
            alt={teaser.contentImageUrl}
          />
          <h2 className="teaser__title">{teaser.contentTitle}</h2>
          <p className="teaser__summary">{teaser.contentSummary}</p>
        </div>
      </Col>
    );
  }
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
