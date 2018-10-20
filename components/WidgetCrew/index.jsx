import React from 'react';
import styled from 'styled-components';

const WidgetCrewStyled = styled.div`
  border: 1px solid white;
  padding: 1rem;
  margin: 1rem;
  color: black;
  flex: 1 1 20em;
`
const CrewContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
`
const MemberStyled = styled.div`
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
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
