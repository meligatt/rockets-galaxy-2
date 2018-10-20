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
import Rocket from './../components/Artwork/Rocket/index.jsx';

const AppViewStyled = styled.div`
  background-image: linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486);
`
const AppViewContainerStyled = styled.div`
  min-height: calc(100vh - 70px);
`
const RocketStyled = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: myData,
      isLoading: true,
      missionCounter: 0,
      randomMission: {}
    };
  }
  componentDidMount() {
    this.setState({
      randomMission: this.getRandomMission(0, this.state.data.length),
      missionCounter: myData.length,
      isLoading: false
    });
  }

  getRandomMission = (min, max) => {
    const mission = Math.round(Math.random() * (max - min) + min);
    return this.state.data[mission];
  }

  render() {
    const { isLoading, randomMission } = this.state;
    const {
      launchDate,
      launchMonth,
      launchYear,
      launchWindow,
      mission,
      description,
      crew
    } = randomMission;


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
                  launchDate={launchDate}
                  launchMonth={launchMonth}
                  launchYear={launchYear}
                  launchWindow={launchWindow || 'TBD'} />
              </div>
            }
            <RocketStyled><Rocket /></RocketStyled>
          </Main>

        </AppViewContainerStyled>
        <Footer />
      </AppViewStyled>
    );
  }
}

export default App;
