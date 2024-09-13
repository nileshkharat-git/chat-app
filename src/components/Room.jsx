import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { darkTheme } from "../util/Theme";
import roomIcon from "../assets/chat.png"
import socket from "../socket";

const Conatiner = styled.div`
  width: 100%;
  height: 8vh;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px 0 ${darkTheme.shadow};
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  content: url(${(props) => props.src});
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 50%;
  object-fit: contain;
  background-color: ${darkTheme.bg_rgular};
`;
const Name = styled.h3`
  font-size: 1rem;
  font-family: arial, sans-serif;
  margin-left: 10px;
`;

const LinkStyle = {
  color: `${darkTheme.text_primary}`,
  textDecoration: "none",
  fontWeight: "bold",
};
const Room = ({ room }) => {

  const handleClick = (room) => {
    socket.emit('join-room', room.name);    
    sessionStorage.setItem('room-name', room.name);
  };
  if (room.profilePic)
    return (
      <Link to={`/chat/${room._id}`} style={LinkStyle}>
        <Conatiner>
          {/* <Icon src={room.profilePic} /> */}
          <Name>{room.name}</Name>
        </Conatiner>
      </Link>
    );

  return (
    <Link to={`/chat/${room._id}`} style={LinkStyle} onClick={()=>handleClick(room)}>
      <Conatiner>
        <Icon src={roomIcon} />
        <Name>{room.name}</Name>
      </Conatiner>
    </Link>
  );
};

export default Room;
