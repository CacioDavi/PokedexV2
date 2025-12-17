import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

import { HeaderNav, HeaderBtn, PkmTypes, Header, PkmName, PkmSprite, PkmType, PkmDetails, NavButtons, NavButton, DetailsNav } from "./style";
import { PokeNumber, Type } from "../../components/Card/style";


function Info() {

    const [favorited, setFavorite] = useState(false)

    const Navigate = useNavigate();
    function RedirectToHome() {
        Navigate('/')
    }

    const Location = useLocation();
    let pkm = JSON.parse(Location.state);
    return (
        <>
            <Header type={pkm.type}>
                <HeaderNav>
                    <HeaderBtn onClick={RedirectToHome}><FontAwesomeIcon icon={faArrowLeft} /></HeaderBtn>
                    <HeaderBtn onClick={() => setFavorite(!favorited)}><FontAwesomeIcon icon={favorited ? fullHeart : emptyHeart} /></HeaderBtn>
                </HeaderNav>

                <PkmName>{pkm.name}</PkmName>
                <PokeNumber>#{pkm.id.toString().padStart(3, '0')}</PokeNumber>
                <PkmTypes>
                    {pkm.types.map(type => <PkmType key={type.slot} slot={type.slot}>{type.type.name}</PkmType>)}
                </PkmTypes>
                <PkmSprite src={pkm.sprite} alt={pkm.name} />
            </Header>
            <PkmDetails>
                <DetailsNav>
                    <NavButtons>
                        <li><NavButton>About</NavButton></li>
                        <li><NavButton>Base Stats</NavButton></li>
                        <li><NavButton>Evolution</NavButton></li>
                        <li><NavButton>Moves</NavButton></li>
                    </NavButtons>
                </DetailsNav>
                <ol style={{height: "100%"}}>
                    <li>Species: 1</li>
                    <li>Height: 12cm</li>
                    <li>Weight: 12 kg</li>
                    <li>Abilities: Overgrow, Chorophyl</li>
                    <li>Gender: 12% mulher 11% homem</li>
                    <li>Egg Groupes: Monster</li>
                    <li>Egg Cycle: Grass</li>
                </ol>
            </PkmDetails>
        </>
    )
}

export default Info;