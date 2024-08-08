import { useParams } from 'react-router-dom';
import { BsAlignBottom, BsFillSendFill } from "react-icons/bs";
import styled from 'styled-components';

import bg  from '../assets/chatbg.jpg';
import { darkTheme } from '../util/Theme';

// components
import Message from "../components/Message"

const Conatiner = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${bg});
    background-size: cover; 
`;

const Input = styled.input`
  width: 75%;
  height: 5vh;
  border:none;
  border-radius:30px;
  outline:none;
  padding-left: 10px;
`;

const sendBtn = {
  fontSize:"25px",
  bottom:"20px",
  margin:"auto",
  right: "10px",
  rotate:"45deg",
  color:`${darkTheme.text_primary}`,


}
const SendBtnWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color:${darkTheme.bg_primary};
  border-radius:50%;
  padding-right:2px;
`;

const BottomPanel = styled.div`
  display:flex;
  width: 100%;
  justify-content:space-around;
  align-items:center;
  position:absolute;
  bottom:10px;

`;

const messages = [
  {
    text:"hii",
    sender:"tanamy"
  },
  {
    text:"what's going on",
    sender:"me"
  },
  {
    text:"nothing",
    sender:"tanamy"
  },
]
const Chat = () => {
  const {id} = useParams()
  // const currentuser = users.filter(user => user.id === id)
  
  return (
    <Conatiner>
      {messages.map((message, id)=>(
        <Message message={message}/>
      ))}
    <BottomPanel>
      <Input></Input>
      <SendBtnWrapper>
        <BsFillSendFill style={sendBtn} />    
      </SendBtnWrapper>
    </BottomPanel>
    </Conatiner>
  )
}

export default Chat