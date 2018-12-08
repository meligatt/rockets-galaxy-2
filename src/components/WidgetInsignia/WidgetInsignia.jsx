import React from 'react';
import styled from 'styled-components';

const WidgetInsigniaStyled = styled.div`
  grid-row: 2;
  grid-column: 3;
  border: ${props => props.theme.borderSmall};
  padding: ${(props) => props.theme.gutter};
  color: black;
`
const WidgetInsigniaImgStyled = styled.img`
  min-width: 100px;
  min-height: 100px;
  background-color: ${props => props.theme.defaultBackground};
  background-size: cover;
`

const WidgetInsignia = ({
  insignia
}) => {
  return (
    <WidgetInsigniaStyled>
      <WidgetInsigniaImgStyled width="100" src={insignia} />
    </WidgetInsigniaStyled>
  );
};

export default WidgetInsignia;
