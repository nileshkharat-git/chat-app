import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../util/Theme'



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
const Contact = ({user}) => {
  return (
    <Conatiner>
        <Icon src={user.profilePic} />
        <Name>{user.name}</Name>
    </Conatiner>
  )
}

export default Contact