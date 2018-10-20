import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      loading: true,
      results: []
    };
  }
  componentDidMount() {

  }
  render() {
    return (
      <div style={{ width: '100%', padding: '1rem', backgroundColor: 'red' }}>
        <h1>Test Space Apps 2018! ... yay!</h1>
        <p>lorem  ipsum</p>
        <p>lorem  ipsum</p>
        <p>lorem  ipsum</p>
        <p>lorem  ipsum</p>
        <p>lorem  ipsum</p>
      </div>
    );
  }
}

export default App;
