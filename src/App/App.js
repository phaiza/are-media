import React, { Component } from 'react'
import './App.css';/* The following line can be included in your src/index.js or App.js file */

import './styles.scss';

import Teaser from '../Teaser';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { data } from "../data-feed";
import {Container, Col, Row} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    };
  }


  componentDidMount(){
   
  }
  
  render() {
    return (
      <>
      <Container>
        <Header/>
        <Sidebar/>
       <div>
        {data.map((teaser, key) => {
          return (
            <Teaser teaser={teaser} key={key}/>
          );
        })}
      </div>
      </Container>
      </>
    )
  }
}


export default App;
