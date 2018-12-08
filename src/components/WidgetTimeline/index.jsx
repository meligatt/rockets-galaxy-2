import React from 'react';
import styled from 'styled-components';

const WidgetTimelineContainerStyled = styled.div`
  grid-column: 3 / 11;
  grid-row: 4;
  display: flex;
  flex-direction: column;
  border: ${props => props.theme.borderSmall};
  background-color: ${props => props.theme.defaultBackground};
  padding: ${(props) => props.theme.gutter};
`
const WidgetTimelineStyled = styled.div`
  display: flex;
  flex-basis: auto;
  justify-content: center;
  flex-wrap: wrap;
  color: black;
`
const WidgetTimelineItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 5%;
  padding: 0.5rem;
  margin: 0.5rem;
  text-align: center;
  color: ${props => props.isCurrent ? '#fff' : '#000'};
  background-color: ${props => props.isCurrent ? '#6d327c' : 'rgba(255, 255, 255, .1)'};
  border-radius: 5px;
`
const HeadingStyled = styled.h4`
  color: #fff;
  font-family: ${props => props.theme.primaryFont};
  font-size: 1.4rem;
  margin-bottom: 1rem;
`

const WidgetTimeline = ({
  data,
  currentRandomMission,
}) => {
  const randomDate = `${currentRandomMission.launchMonth}-${currentRandomMission.launchYear}-${currentRandomMission.launchDate}`;
  return (
    <WidgetTimelineContainerStyled>
      <HeadingStyled>Launches Timeline</HeadingStyled>
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
