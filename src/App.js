import React, { Component } from 'react';
import Header from './components/Header.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mortgageData: []
    }
  }

  render() {
    return(
      <div className="mortgage-calculator-box">
        <Header title="Check How Much Debt You Can Get In Here!"/>
      </div>
    );
  }
}

export default App;
