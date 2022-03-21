import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    :root{
        font-family: "Nunito Sans", sans-serif;
        --shadow-light-mode: #E9E7E7;
    }
`;