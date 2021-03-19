import React, { Component } from "react";
import "./styles.scss";
import Teaser from "../Teaser";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { data } from "../data-feed";
import { Container, Col, Row } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    let count = 1;
    return (
      <>
        <Container>
          <Row>
            <Header />
          </Row>
          <Row>
            <Col xs={12} className="d-sm-none">
              <Sidebar />
            </Col>
            <Col md={8} xs={12}>
              <Row>
                {data.map((teaser, key) => {
                  if (count === 1) {
                    count++;
                    return (
                      <Teaser teaser={teaser} key={key} featuredPost={true} />
                    );
                  } else
                    return (
                      <Teaser teaser={teaser} key={key} featuredPost={false} />
                    );
                })}
              </Row>
            </Col>

            <Col md={4} className="d-none d-sm-block">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
