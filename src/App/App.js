import React, { Component } from "react";
import "./App.css"; /* The following line can be included in your src/index.js or App.js file */
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
                  return <Teaser teaser={teaser} key={key} />;
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
