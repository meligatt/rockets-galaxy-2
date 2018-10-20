import React from 'react';
import styled from 'styled-components';

const WidgetCrewStyled = styled.div`
  border: 1px solid white;
  padding: 1rem;
  margin: 1rem;
  color: black;
`
const WidgetCrew = ({
  crew,
  crewed,
  onClickCrewMember,
}) => {
  if (!crewed) {
    return (<WidgetCrewStyled>No crew</WidgetCrewStyled>);
  }
  return (
    <WidgetCrewStyled>
      <h4>Crew</h4>
      {
        crewed && crew.map(item => {
          return (<div id={item.name} key={item.name} onClick={onClickCrewMember}>
            <div> {item.name}</div>
            <img width="100" src={item.avatar} />
          </div>)
        })
      }
    </WidgetCrewStyled>
  );
};

export default WidgetCrew;
