import React from 'react';
import styled from 'styled-components';

const WidgetExpeditionStyled = styled.div`
  grid-row: 2;
  grid-column: 4 / -3;
  border: ${props => props.theme.borderSmall};
  padding: ${(props) => props.theme.gutter};
  color: black;
`
const HeadingStyled = styled.h4`
  color: #fff;
  font-family: ${props => props.theme.primaryFont};
  font-size: 1.4rem;
  margin-bottom: 1rem;
`

const WidgetExpedition = ({
  mission,
  description
}) => {
  return (
    <WidgetExpeditionStyled>
      <HeadingStyled>Expedition</HeadingStyled>
      <h2>Mission: {mission}</h2>
      <div>Description: {description}</div>
    </WidgetExpeditionStyled>
  );
};

export default WidgetExpedition;
