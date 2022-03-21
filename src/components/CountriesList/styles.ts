import styled from "styled-components";

export const CountriesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 5rem;
    width: 100%;
    font-size: 0.9em;
    div.wrapper{
        display: inline-block;
        height: 20rem;
        box-shadow: 0px 0px 10px lightgray;
        border-radius: 5px;
        div.content{
            padding: .8rem 1.5rem;
            h2{
                margin-bottom: .6rem;
            }
            p{
                margin-bottom: .2rem;
            }
            strong{
                font-weight: 600;
            }
        }
        img{
            object-fit: cover;
            height: 50%;
            width: 100%;
            border-radius: 5px 5px 0 0;
        }
    }
`