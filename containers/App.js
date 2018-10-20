import './index.scss';
import React, { Component } from 'react';
import Nav from './../components/Nav/index.jsx';
import Main from './../components/Main/index.jsx';
import Footer from './../components/Footer/index.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    console.log("componentDidMount!");
    console.log("peace among worlds!");
    console.log("another log in componentDidMount!");
  }

  render() {
    return (
      <div className="app-view">
        <div className="app-view__container">
          <Nav />
          <Main>
            <div>
              Hello Rockets of the galaxy Chrome extension!
              <p>
                <strong>
                  practicing git commands!
                  practicing git commands!
                  practicing git commands!
                  practicing git commands!
                  practicing git commands!
                  practicing git commands!
                  practicing git commands!
                  practicing git commands!
                </strong>
              </p>
              <p>
                Hello Rockets of the galaxy Chrome extension!
              </p>
              <p>
                Hello Rockets of the galaxy Chrome extension!
              </p>
              <p>
                Hello Rockets of the galaxy Chrome extension!
              </p>
              <p>
                Hello Rockets of the galaxy Chrome extension!
              </p>
              <p>
                Hello Rockets of the galaxy Chrome extension!
              </p>
            </div>
          </Main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
