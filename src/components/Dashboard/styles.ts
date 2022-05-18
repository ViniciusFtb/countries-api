import styled from "styled-components";

export const Container = styled.main`
    max-width: 1250px;
    div.menu-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2rem 0;
        .search-wrapper{
            display: flex;
            align-items: center;
            box-shadow: 0px 0px 10px #e0e0e0;
            width: 29rem;
            border-radius: 5px;
            img{
                width: 1.5rem;
                margin: 0 .9rem;
                filter: invert(57%) sepia(1%) saturate(1700%) hue-rotate(319deg) brightness(88%) contrast(84%);
            }
            input{
                height: 3.5rem;
                width: 100%;
                border: none;
                color: gray;
            }
        }
        .filter-wrapper{
            font-weight: 600;
            position: relative;
            .menu-button-container{
                height: 3.5rem;
                width: 14rem;
                padding: .9rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                box-shadow: 0px 0px 10px #e0e0e0;
                border-radius: 5px;
            }
            #menu-toggle{
                display: none;
            }
            .menu{
                display: none;
                position: absolute;
                top: 3.8rem;
                width: 14rem;
                list-style: none;
                box-shadow: 0px 0px 10px #e0e0e0;
                border-radius: 5px;
                padding: .5rem 1rem;
                background-color: #fff;
                li{
                    margin: .5rem 0;
                    cursor: pointer;
                }
            }
            #menu-toggle:checked ~ .menu{
                display: inline-block;
            }
            img{
                width: 1rem;
            }
            #menu-toggle:checked ~ .menu-button-container img{
                transform: rotate(180deg);
            }
        }
    }
    
`;