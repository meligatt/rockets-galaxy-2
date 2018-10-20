import React from 'react';
import styled from 'styled-components';

const WidgetCrewStyled = styled.div`
  border: 1px solid white;
  padding: 1rem;
  margin: 1rem;
  color: black;
`
const WidgetCrew = ({
  crew
}) => {
  return (
    <WidgetCrewStyled>
      <h4>Crew</h4>
      {
        crew.map(item => <div key={item.name}>{item.name}</div>)
      }
    </WidgetCrewStyled>
  );
};

export default WidgetCrew;
