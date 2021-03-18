import React, { Component } from 'react'
import './App.css';
import Teaser from './Teaser';
import Header from './Header';
import Sidebar from './Sidebar';
import { data } from "./data-feed";

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
      <div>
        <Header/>
        <Sidebar/>
       <div>
        {data.map((teaser, key) => {
          return (
            <Teaser teaser={teaser} key={key}/>
          );
        })}
      </div>
      </div>
    )
  }
}


export default App;
