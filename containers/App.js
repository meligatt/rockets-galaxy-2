import 'data/reset.css';
import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from './../components/Nav/index.jsx';
import Main from './../components/Main/index.jsx';
import Footer from './../components/Footer/index.jsx';
import WidgetExpedition from './../components/WidgetExpedition/index.jsx';
import WidgetCrew from './../components/WidgetCrew/index.jsx';
import WidgetLaunch from './../components/WidgetLaunch/index.jsx';
import myData from 'data/data.js';

const AppViewStyled = styled.div`
  background-image: linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486);
  border: 1px solid red;
`
const AppViewContainerStyled = styled.div`
min-height: calc(100vh - 90px);
border: 1px solid blue;
`

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
      <AppViewStyled>
        <AppViewContainerStyled>
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
        </AppViewContainerStyled>
        <Footer />
      </AppViewStyled>
    );
  }
}

export default App;
