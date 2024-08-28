import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BsPersonPlusFill } from "react-icons/bs";
import styled from "styled-components";

import { darkTheme } from "../util/Theme";

import Room from "./Room";

const addPerson = {
  fontSize: "2rem",
  color: `${darkTheme.text_primary}`,
  margin: "4px auto",
  display: "block",
};

const AddPersonWrapper = styled.div`
  position: absolute;
  padding: 8px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${darkTheme.bg_primary};
  bottom: 20px;
  right: 20px;
`;

const NotConnected = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: ${darkTheme.font_family};
`;
const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/room?userID=${sessionStorage.getItem('userID')}`)
    .then(responce => responce.json())
    .then(data => setRooms(data))
  }, [rooms]);

  const navigate = useNavigate();
  return (
    <>
      {rooms.length >0 ? rooms.map(room =>(
        <Room key={room._id} room={room} />
      )):(<NotConnected>Not conntected with any room.</NotConnected>)}
      <AddPersonWrapper onClick={() => navigate("/create-room")}>
        <BsPersonPlusFill style={addPerson} />
      </AddPersonWrapper>
    </>
  );
};

export default RoomList;
