import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: calc(100% + 10rem);
    padding: 0 5rem;
    margin-top: -1rem;
    background-color: ${({ theme }) => theme.elements};
    box-shadow: ${({ theme }) => theme.shadow};
    div{
        display: flex;
        justify-content: space-between;
        width: 1250px;
    }
    a{
        color: ${({ theme }) => theme.text};
        text-decoration: none;
        font-size: 1.2rem;
    }
`;