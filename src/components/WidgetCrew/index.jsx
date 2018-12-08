import React from 'react';
import styled from 'styled-components';

const WidgetCrewStyled = styled.div`
  grid-column: 5 / 11;
  grid-row: 3;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  border: ${props => props.theme.borderSmall};
  padding: ${(props) => props.theme.gutter};
  color: black;
  background-color: none;
`
const CrewContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
`
const MemberStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-width: 50px;
  min-height: 70px;
  background-color: ${props => props.theme.defaultBackground};
  padding: ${(props) => props.theme.gutter};
`

const HeadingStyled = styled.h4`
  color: #fff;
  font-family: ${props => props.theme.primaryFont};
  font-size: 1.4rem;
  margin-bottom: 1rem;
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
      <HeadingStyled>Crew</HeadingStyled>

      <CrewContainerStyled>
        {
          crewed && crew.map(item => {
            return (
              <MemberStyled id={item.name} key={item.name} onClick={onClickCrewMember}>
                <img height="70" width="auto" src={item.avatar} style={{ boxShadow: '-1px 1px 20px rgba(255, 255, 255, 0.48)' }} />
                <div>{item.name}</div>
              </MemberStyled>)
          })
        }
      </CrewContainerStyled>

    </WidgetCrewStyled>
  );
};

export default WidgetCrew;
