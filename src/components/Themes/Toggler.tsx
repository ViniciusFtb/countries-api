import styled from "styled-components";
import { func, string } from "prop-types"

import { ThemeProps } from "../Header";

import moonImg from "../../assets/moon.svg";
import darkMoonImg from "../../assets/moon_dark.svg";

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  img {
    width: 1rem;
    height: 1rem;
    margin-right: .3rem;
  }
  p {
    color: ${({ theme }) => theme.text};
  }
`;

export function Toggle({ theme, toggleTheme }:ThemeProps) {
    return (
        <Button onClick={toggleTheme}>
            <img src={theme === 'light' ? moonImg : darkMoonImg} />
            <p>Dark Theme</p>
        </Button>
    );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}
