import React from 'react';
import styled from 'styled-components';

const WidgetCrewMemberStyled = styled.div`
  border: 1px solid white;
  padding: 1rem;
  margin: 1rem;
  color: black;
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
      <div>name: {name}</div>
      <div>avatar: <img width="100" src={avatar} /></div>
      <div>Profile: <a href={{ link }}>{link}</a></div>
      <div>
        <h5>Social media</h5>
        <div>twitter: {social.twitter}</div>
        <div>facebook: {social.facebook}</div>
        <div>flickr: {social.flickr}</div>
        <div>instagram: {social.instagram}</div>
      </div>
    </WidgetCrewMemberStyled >
  );
};

export default WidgetCrewMember;