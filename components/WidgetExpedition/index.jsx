import React from 'react';
import styled from 'styled-components';

const WidgetExpeditionStyled = styled.div`
  border: 1px solid white;
  padding: 1rem;
  margin: 1rem;
  color: black;
`
const WidgetExpedition = ({
  mission,
  description
}) => {
  return (
    <WidgetExpeditionStyled>
      <h4>Expedition</h4>
      <div>Mission: {mission}</div>
      <div>Description: {description}</div>
    </WidgetExpeditionStyled>
  );
};

export default WidgetExpedition;
