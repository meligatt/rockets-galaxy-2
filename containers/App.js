import 'data/reset.css';
import React, { Component, Fragment } from 'react';
import { Box, styled } from 'fannypack';
import Nav from './../components/Nav/index.jsx';
import Main from './../components/Main/index.jsx';
import Footer from './../components/Footer/index.jsx';
import WidgetExpedition from './../components/WidgetExpedition/index.jsx';
import WidgetInsignia from './../components/WidgetInsignia/WidgetInsignia.jsx';
import WidgetCrew from './../components/WidgetCrew/index.jsx';
import WidgetCrewMember from './../components/WidgetCrewMember/index.jsx';
import WidgetLaunch from './../components/WidgetLaunch/index.jsx';
import WidgetTimeline from './../components/WidgetTimeline/index.jsx';
import myData from 'data/data.js';
import Rocket from './../components/Artwork/Rocket/index.jsx';

const GridContainerStyled = styled(Box)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: .5rem;
  min-height: 100vh;
  background-image: linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486);
  line-height: 1.5;
`
const AppViewContainerStyled = styled(Box)`
  min-height: calc(100vh - 70px);
`
const RocketStyled = styled(Box)`
  position: absolute;
  left: 0;
  bottom: 0;
`
const WidgetArea = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: myData,
      isLoading: true,
      missionCounter: 0,
      randomMission: {},
      selectedCrewMember: null,
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
  onClickCrewMember = (event) => {
    const name = event.currentTarget.id;
    this.setState({ selectedCrewMember: name });
  }

  render() {
    const { isLoading, randomMission, selectedCrewMember, data } = this.state;
    const {
      launchDate,
      launchMonth,
      launchYear,
      launchWindow,
      mission,
      description,
      crew,
      crewed,
      insignia
    } = randomMission;

    return (
      <GridContainerStyled>
        <Nav />
        {
          !isLoading
          && (
            <Fragment>
              <WidgetInsignia insignia={insignia} />
              <WidgetExpedition
                mission={mission}
                description={description}
              />
              <WidgetLaunch
                launchDate={launchDate}
                launchMonth={launchMonth}
                launchYear={launchYear}
                launchWindow={launchWindow || 'TBD'}
              />
              <WidgetCrew
                crew={crew}
                crewed={crewed}
                onClickCrewMember={this.onClickCrewMember}
              />
              {
                selectedCrewMember
                && (
                  <WidgetCrewMember
                    data={randomMission.crew.filter(item => item.name === selectedCrewMember)}
                  />
                )
              }
              <WidgetTimeline data={data} currentRandomMission={randomMission} /> 
              {/* <RocketStyled><Rocket /></RocketStyled> */}
            </Fragment>
          )
        }
        <Footer />
      </GridContainerStyled>
    );
  }
}

export default App;
