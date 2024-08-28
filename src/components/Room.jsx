import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { darkTheme } from '../util/Theme'

// pages
import Chat from '../pages/Chat';

const Conatiner = styled.div`
  width: 100%;
  height: 8vh;
  background-color: ${darkTheme.bg_secondary};
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;

  &:hover{
    cursor: pointer;
  }
  
`;

const Icon = styled.img`
    content:url(${props=>props.src});
    width: 50px;
    height:50px;
    margin: 5px;
    border-radius:50%;
    object-fit: contain;
    background-color: ${darkTheme.bg_rgular};
`;
const Name = styled.h3`
    color: white;
    font-size: 1.5rem;
    font-family: arial,sans-serif;
    margin-left: 10px;
    
`;

const LinkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
}
const Room = ({room}) => {
  return (
    <Link to={`/chat/${room._id}`} style={LinkStyle}>
      <Conatiner>
          {/* <Icon src={room.profilePic} /> */}
          <Name>{room.name}</Name>
      </Conatiner>
    </Link>
  )
}

export default Room