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
      <div>
        Test Space Apps 2018! ... yay!
      </div>
    );
  }
}

export default App;
