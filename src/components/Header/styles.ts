import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    box-shadow: 0rem .2rem .3rem var(--shadow-light-mode);
    div{
        display: flex;
        justify-content: space-between;
        width: 1250px;
    }
    a{
        color: black;
        text-decoration: none;
        font-size: 1.2rem;
    }
    button{
        display: flex;
        align-items: center;
        border: none;
        background-color: transparent;
        cursor: pointer;
        img{
            width: 2rem;
        }
    }
`;