import React from 'react';
import styled from 'styled-components';

const WidgetCrewMemberStyled = styled.div`
  border: 1px solid white;
  padding: 1rem;
  margin: 1rem;
  color: black;
`

const ContentStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  flex-wrap: wrap;
`
const WidgetCrewMember = ({
  data
}) => {
  const [{
    name,
    link,
    avatar,
    social
  }] = data;

  return (
    <WidgetCrewMemberStyled>
      <h4>Crew Member</h4>
      <ContentStyled>
        <img height="200" width="auto" src={avatar} style={{ margin: '0 10px' }} />
        <div>
          <div>name: {name}</div>
          <div>Profile: <a href={link}>{link}</a></div>
          <div>
            <h5>Social media</h5>
            <div>twitter: {social.twitter}</div>
            <div>facebook: {social.facebook}</div>
            <div>flickr: {social.flickr}</div>
            <div>instagram: {social.instagram}</div>
          </div>
        </div>
      </ContentStyled>


    </WidgetCrewMemberStyled >
  );
};

export default WidgetCrewMember;