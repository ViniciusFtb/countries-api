import { Container } from "./styles";
import arrowImg from "../../assets/arrow.svg";
import { CountriesList } from "../CountriesList";

export function Dashboard(){
    return (
        <Container>
            <div>
                <input type="text" placeholder="Search for a country..."/>
                <div>
                    <p>Filter by Region</p>
                    <img src={arrowImg}/>
                </div>
                <CountriesList/>
            </div>
            <div>
                
            </div>
        </Container>
    );
}