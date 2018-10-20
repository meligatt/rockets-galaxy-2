import React from 'react';
import styled from 'styled-components';

const WidgetTimelineContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  padding: 1rem;
  margin: 1rem;
`
const WidgetTimelineStyled = styled.div`
  display: flex;
  flex-basis: auto;
  flex-wrap: wrap;
  color: black;
`

const WidgetTimelineItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 5%;
  background-color: ${props => props.isCurrent ? '#6d327c' : 'white'};
  padding: 0.5rem;
  margin: 0.5rem;
  text-align: center;
  color: ${props => props.isCurrent ? 'white' : 'black'};
`

const WidgetTimeline = ({
  data,
  currentRandomMission,
}) => {
  const randomDate = `${currentRandomMission.launchMonth}-${currentRandomMission.launchYear}-${currentRandomMission.launchDate}`;
  console.log('randomDate:', randomDate);
  return (
    <WidgetTimelineContainerStyled>
      <h4>Launches Timeline</h4>
        <WidgetTimelineStyled>
          {
            data && data.map((launch, index) => {
              const currentDate = `${launch.launchMonth}-${launch.launchYear}-${launch.launchDate}`;
              return (<WidgetTimelineItemStyled isCurrent={currentDate === randomDate} key={`${index}-${launch.launchMonth}-${launch.launchYear}`}>
                <p>{`${launch.launchMonth} ${launch.launchYear}`}</p>
              </WidgetTimelineItemStyled>)
              }
            )
          }
        </WidgetTimelineStyled>
      </WidgetTimelineContainerStyled>
  );
};

export default WidgetTimeline;
