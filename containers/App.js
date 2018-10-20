import './index.scss';
import React, { Component } from 'react';
import Nav from './../components/Nav/index.jsx';
import Main from './../components/Main/index.jsx';
import Footer from './../components/Footer/index.jsx';
import WidgetExpedition from './../components/WidgetExpedition/index.jsx';
import WidgetCrew from './../components/WidgetCrew/index.jsx';
import WidgetLaunch from './../components/WidgetLaunch/index.jsx';
import myData from 'data/data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true
    };
  }
  componentDidMount() {
    this.setState({
      data: myData[3],
      isLoading: false
    });
  }

  render() {
    const {
      date,
      launchWindow,
      mission,
      description,
      crew } = this.state.data;
    const { isLoading } = this.state;

    return (
      <div className="app-view">
        <div className="app-view__container">
          <Nav />
          <Main>
            {!isLoading &&
              <div className="Widget-area">
                <WidgetExpedition
                  mission={mission}
                  description={description} />
                <WidgetCrew crew={crew} />
                <WidgetLaunch
                  date={date}
                  launchWindow={launchWindow || 'TBC'} />
              </div>
            }
          </Main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
