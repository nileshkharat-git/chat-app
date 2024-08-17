import React, { useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { darkTheme } from "../util/Theme";

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
`;

const MenuItem = styled.li`
  display: block;
  font-size: 14px;
  font-family: "Roboto", sans;
  font-weight: 600;
  height: 3vh;
  padding: 5px 0;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #bbbbbb;
    color: white;
  }
`;
const threedot = {
  cursor: "pointer",
  color: "white",
  fontSize: "1.4rem",
};
const Header = () => {
  const [show, setShow] = useState(false);
  const Menu = styled.ul`
    position: absolute;
    width: 25%;
    text-align: center;
    background-color: ${darkTheme.bg_regular};
    right: 10px;
    top: 6%;
    border-radius: 5%;
    display: ${show ? "block" : "none"};
    @media (min-width: 600px) {
      width: 10%;
      border-radius: 5%;
    }
  `;
  return (
    <Container>
      <Heading>chatApp</Heading>
      <BsThreeDotsVertical onClick={() => setShow(!show)} style={threedot} />
      <Menu>
        <MenuItem>New Group</MenuItem>
        <MenuItem>Settings</MenuItem>
      </Menu>
    </Container>
  );
};

export default Header;
