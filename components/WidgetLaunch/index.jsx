import React from 'react';
import styled from 'styled-components';

const WidgetlaunchStyled = styled.div`
  border: 1px solid white;
  padding: 1rem;
  margin: 1rem;
  color: black;
  flex: 1 1 20em;
`
const WidgetLaunch = ({
  launchDate,
  launchMonth,
  launchYear,
  launchWindow,
}) => {
  return (
    <WidgetlaunchStyled>
      <h4>Launch</h4>
      <div>date: {launchDate}</div>
      <div>Month: {launchMonth}</div>
      <div>Year: {launchYear}</div>
      <div>Launch Window: {launchWindow}</div>
    </WidgetlaunchStyled>
  );
};

export default WidgetLaunch;
