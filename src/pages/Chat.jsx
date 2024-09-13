import {  useContext,useEffect,  useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { BsFillSendFill, BsBoxArrowLeft } from "react-icons/bs";
import styled from "styled-components";
import socket from "../socket";

import bg from "../assets/chatbg.jpg";
import { darkTheme } from "../util/Theme";

// components
import Message from "../components/Message";
// context
import { MessageContext } from "../Context";

const Conatiner = styled.div`
  width: 100%;
  height: 92vh;
  background-image: url(${bg});
  background-size: contain;
`;

const Input = styled.input`
  width: 75%;
  height: 5vh;
  border: none;
  border-radius: 30px;
  outline: none;
  padding-left: 10px;
`;

const sendBtn = {
  fontSize: "25px",
  bottom: "20px",
  margin: "auto",
  right: "10px",
  rotate: "45deg",
  color: "white",
};
const SendBtnWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: ${darkTheme.bg_primary};
  border-radius: 50%;
  padding-right: 2px;
`;

const NoMessage = styled.h1`
    position: relative;
    top: 10vh;
    text-align: center;
    color: ${darkTheme.text_primary};
    font-family: ${darkTheme.font_family};
    background-color: ${darkTheme.bg_secondary};
`;
const BottomPanel = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 10px;
`;

const InfoBox = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  background-color: ${darkTheme.bg_primary};
  justify-content: space-between;
`;

const leaveIcon = {
  cursor: "pointer",
  color: "white",
  fontSize: "1.5rem",
  marginRight: "10px",
};
const Chat = ({setMessage}) => {
  const {roomId} = useParams()
  const messages = useContext(MessageContext);
  
  const [recentChats, setRecentChats] = useState([]);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const triggerLeaveRoom = () => {
    socket.emit("leaveRoom",sessionStorage.getItem("room-name"));
    sessionStorage.removeItem("room-name");
    setMessage([]);
    return navigate("/room-list");
  };

  useEffect(() => {
    fetch(`http://localhost:8000/api/messages?roomId=${roomId}`)
    .then(res => res.json())
    .then(res => {
      setRecentChats(res)      
    })
  }, [roomId])

  const handleSend = () => {
    let prepareData = {
      text: text,
      userId: sessionStorage.getItem("userID"),
      roomId: roomId,
    };
    socket.emit("send-message",sessionStorage.getItem("room-name"), prepareData);
    setText("");
  };

  return (
    <Conatiner>
      <InfoBox>
        <div>
          <span style={{ color: "white" , fontSize:"1.5rem", fontFamily:"arial", marginLeft:"18px"}}>{sessionStorage.getItem("room-name")}</span>
        </div>
        <BsBoxArrowLeft style={leaveIcon} onClick={triggerLeaveRoom}/>
      </InfoBox>
      {[...messages,...recentChats].length > 0 ?[...recentChats, ...messages].map((message, id) => (
        <Message message={message} key={id} />
      )):""}
      
      <BottomPanel>
        <Input
          onInput={(e) => setText(e.target.value)}
          value={text}
          placeholder={`send message`}
        ></Input>
        <SendBtnWrapper onClick={() => handleSend()}>
          <BsFillSendFill style={sendBtn} />
        </SendBtnWrapper>
      </BottomPanel>
    </Conatiner>
  );
};

export default Chat;
