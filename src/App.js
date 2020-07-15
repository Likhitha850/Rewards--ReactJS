import './App.css';

import React, { Component } from 'react';
import Rewards from './components/rewards';

class App extends Component {
   render() {
    return (
      <Rewards rewards={this.state.rewards} />
    )
  } 

  state = {
    rewards: []
  };

  componentDidMount() {
    fetch('http://localhost:8080/rewards')
      .then(res => res.json())
      .then((data) => {
        this.setState({ rewards: data })
      })
      .catch(console.log)
  }
}

export default App;
