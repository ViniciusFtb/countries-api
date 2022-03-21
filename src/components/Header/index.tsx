import moonImg from "../../assets/moon.svg";
import { Container } from "./styles";

export function Header(){
    return (
        <Container>
            <div>
                <a href="#">
                    <strong>Where in the world?</strong>
                </a>
                <button>
                    <img src={moonImg} alt="Moon icon" />
                    Dark Mode 
                </button>
            </div>
        </Container>
    );
};