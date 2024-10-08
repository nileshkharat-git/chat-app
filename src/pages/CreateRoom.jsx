import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Input, Button } from "../components/Style/Form";
import styled from "styled-components";
import { darkTheme } from "../util/Theme";

const SideLink = styled.span`
  color: ${darkTheme.text_primary};
  font-family: ${darkTheme.font_family};
  &:hover {
    cursor: pointer;
  }
`;
const CreateRoom = () => {
  const [roomName, setRoomName] = useState();
  const navigate = useNavigate();
  const [connectToRoom, setConnectToRoom] = useState(false);

  const connectRoom = ()=>{
    let url = "http://localhost:8000/api/room/connect";

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomName: roomName,
        userID: sessionStorage.getItem("userID"),
      }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        alert(res.message);
        return navigate("/room-list", { replace: false });
      })
      .catch((err) => console.error("error:" + err));
    
  }
  const createRoom = () => {
    let url = "http://localhost:8000/api/room";

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomName: roomName,
        userID: sessionStorage.getItem("userID"),
      }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        alert(res.message);
        return navigate("/room-list", { replace: false });
      })
      .catch((err) => console.error("error:" + err));
  };


  if(connectToRoom === false)
    return (
      <Container>
        <Input
          placeholder="Room name"
          onChange={(e) => setRoomName(e.target.value)}
          required
        />
        <Button onClick={() => createRoom()}>Create</Button>
        <SideLink onClick={()=>setConnectToRoom(!connectToRoom)}>Connect to room?</SideLink>
      </Container>
    );
  return (
    <Container>
      <Input
        placeholder="Room name"
        onChange={(e) => setRoomName(e.target.value)}
        required
      />
      <Button onClick={() => connectRoom()}>Connect</Button>
      <SideLink onClick={()=>setConnectToRoom(!connectToRoom)}>Create room?</SideLink>
    </Container>
  );
};

export default CreateRoom;
