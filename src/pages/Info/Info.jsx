import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

import { HeaderNav, HeaderBtn, PkmTypes, Header, PkmName, PkmSprite, PkmType, PkmDetails, NavButtons, NavButton, DetailsNav } from "./style";
import { PokeNumber } from "../../components/Card/style";
import About from './subPages/pages/About'
import {  } from './subPages/pages/Evolution'
import {  } from './subPages/pages/Moves'
import {  } from './subPages/pages/Stats'


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
                <About pkm={pkm}/>
            </PkmDetails>
        </>
    )
}

export default Info;