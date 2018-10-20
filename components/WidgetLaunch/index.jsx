import React from 'react';
import styled from 'styled-components';

const WidgetlaunchStyled = styled.div`
  border: 1px solid white;
  padding: 1rem;
  margin: 1rem;
  color: black;
`
const WidgetLaunch = ({
  date,
  launchWindow
}) => {
  return (
    <WidgetlaunchStyled>
      <h4>Launch</h4>
      <div>date: {date}</div>
      <div>Launch Window: {launchWindow}</div>
    </WidgetlaunchStyled>
  );
};

export default WidgetLaunch;
