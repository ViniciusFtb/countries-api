import { Container } from "./styles";
import { Toggle } from "../Themes/Toggler";
import styled from "styled-components";

export interface ThemeProps {
    theme: string | (() => void)
    toggleTheme: string | (() => void);
}

export function Header({theme, toggleTheme}: ThemeProps){
    return (
        <Container>
            <div>
                <a href=".">
                    <strong>Where in the world?</strong>
                </a>
                <Toggle theme={theme} toggleTheme={toggleTheme}/>
            </div>
        </Container>
    );
};