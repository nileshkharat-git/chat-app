import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { BsThreeDotsVertical, BsBoxArrowLeft } from "react-icons/bs";
import { darkTheme } from "../util/Theme";
import { userLogout } from "../util/Menu";
import socket from "../socket";

const Container = styled.div`
  width: 100%;
  background-color: ${darkTheme.bg_primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Heading = styled.h1`
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  padding: 0.5rem;
  color: white;
  margin-left: 0.5rem;
`;


const Header = () => {

  return (
    <Container>
      <Heading>Samvaad</Heading>
    </Container>
  );
};

export default Header;
