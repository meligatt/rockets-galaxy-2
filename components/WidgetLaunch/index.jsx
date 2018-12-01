import React from 'react';
import styled from 'styled-components';

const WidgetlaunchStyled = styled.div`
  grid-row: 3;
  grid-column: 3 / 5;
  border: ${props => props.theme.borderSmall};
  padding: ${(props) => props.theme.gutter};
  color: black;
  background-color: ${props => props.theme.defaultBackground};
`
const HeadingStyled = styled.h4`
  color: #fff;
  font-family: ${props => props.theme.primaryFont};
  font-size: 1.4rem;
  margin-bottom: 1rem;
`

const WidgetLaunch = ({
  launchDate,
  launchMonth,
  launchYear,
  launchWindow,
}) => {
  return (
    <WidgetlaunchStyled>
      <HeadingStyled>Launch</HeadingStyled>
      <div>date: {launchDate}</div>
      <div>Month: {launchMonth}</div>
      <div>Year: {launchYear}</div>
      <div>Launch Window: {launchWindow}</div>
    </WidgetlaunchStyled>
  );
};

export default WidgetLaunch;
