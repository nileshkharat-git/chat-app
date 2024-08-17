import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillSendFill } from "react-icons/bs";
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
  height: 100vh;
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
  color: `${darkTheme.text_primary}`,
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

const BottomPanel = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 10px;
`;

const Chat = () => {
  const { userid } = useParams();
  const [message, setMessage] = useContext(MessageContext);
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("new-message", (receiveData) => {
      setMessage([...message, receiveData]);
    });
  }, [socket]);

  const handleSend = () => {
    let prepareData = {
      text: text,
      sender: userid,
    };
    socket.emit("send-message", prepareData);
    setText("");
  };

  return (
    <Conatiner>
      {message.map((message, id) => (
        <Message message={message} key={id} />
      ))}
      <BottomPanel>
        <Input
          onInput={(e) => setText(e.target.value)}
          value={text}
          placeholder={`message from ${userid}`}
        ></Input>
        <SendBtnWrapper onClick={() => handleSend()}>
          <BsFillSendFill style={sendBtn} />
        </SendBtnWrapper>
      </BottomPanel>
    </Conatiner>
  );
};

export default Chat;
