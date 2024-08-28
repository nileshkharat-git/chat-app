import styled from "styled-components";
import { darkTheme } from "../../util/Theme";


export const Container = styled.div`
  width: 30%;
  height: 40vh;
  margin: 0 auto;
  margin-top: 20vh;
  border: 1px solid ${darkTheme.bg_regular};
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0px 4px 10px ${darkTheme.bg_regular};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 90%;
  height: 25px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Button = styled.button`
  display: block;
  width: 90%;
  padding: 10px;
  font-weight: 500;
  background: ${darkTheme.bg_primary};
  color: ${darkTheme.text_primary};
  font-size: 1rem;
  border: none;
  border-radius: 25px;
`;
