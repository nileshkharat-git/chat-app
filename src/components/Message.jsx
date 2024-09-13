import React from "react";
import styled from "styled-components";
import { darkTheme } from "../util/Theme";


const MessageWrapper = styled.div`
  width: 100%;
  display: flex;
  `;

const Label = styled.div`
  background-color: ${darkTheme.bg_regular};
  border-radius: 10px;
  width: 40%;
  max-width: 100%;
  padding: 5px;
  margin:5px 2px;
  
`;

const Text = styled.span`
  font-size: 18px;
  font-family: arial, sans-serif;
`;

const Message = ({ message}) => {
  return (
    <MessageWrapper style={{justifyContent: message.userId === sessionStorage.getItem("userID") ? "flex-end" : "flex-start"}}>
      <Label>
        <Text>{message.text}</Text>
      </Label>
    </MessageWrapper>
  );
};

export default Message;
