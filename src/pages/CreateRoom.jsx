import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Input, Button } from "../components/Style/Form";

const CreateRoom = () => {
    const [roomName, setRoomName] = useState();
    const navigate = useNavigate();

    const handleClick = (event) => {
        let url = 'http://localhost:8000/api/room';

        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ roomName: roomName, userID:sessionStorage.getItem("userID") }),
          };
        
        fetch(url, options)
          .then(res => res.json())
          .then(res => {
            alert(res.message);
            return navigate("/room-list", {replace:false});
          })
          .catch(err => console.error('error:' + err));
    }

    return (
    <Container>
      <Input placeholder="Room name" onChange={(e)=>setRoomName(e.target.value)}/>
      <Button onClick={()=>handleClick()}>Create Room</Button>
    </Container>
  );
};

export default CreateRoom;
