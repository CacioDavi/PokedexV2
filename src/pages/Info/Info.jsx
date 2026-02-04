// React Resources
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

// Page Styles
import { HeaderNav, HeaderBtn, PkmTypes, Header, PkmName, PkmSprite, 
        PkmType, PkmDetails, NavButtons, NavButton, DetailsNav, 
        Background} from "./style";

import { PokeNumber } from "../../components/Card/style";
// Components
import AboutPage from './subPages/pages/AboutPage'
import EvolutionsPage from './subPages/pages/EvolutionsPage'
import MovesPage from './subPages/pages/MovesPage'
import StatsPage from './subPages/pages/StatsPage'

function Info() {

    const [favorited, setFavorite] = useState(false);
    const [subPage, SetSubPage] = useState(0);

    const Navigate = useNavigate();
    const Location = useLocation();

    let pkm = JSON.parse(Location.state);
    console.log(pkm)

    const SubPages = [
        <AboutPage pkm={pkm} />,
        <StatsPage pkm={pkm} />,
        <EvolutionsPage pkm={pkm} />,
        <MovesPage pkm={pkm} />,
    ]

    function RedirectToHome() {
        Navigate('/');
    }


    return (
        <Background $pkmtype={pkm.type}>
            <Header>
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
                        <li><NavButton $active={subPage == 0} onClick={() => SetSubPage(0)}>About</NavButton></li>
                        <li><NavButton $active={subPage == 1} onClick={() => SetSubPage(1)}>Base Stats</NavButton></li>
                        <li><NavButton $active={subPage == 2} onClick={() => SetSubPage(2)}>Evolution</NavButton></li>
                        <li><NavButton $active={subPage == 3} onClick={() => SetSubPage(3)}>Moves</NavButton></li>
                    </NavButtons>
                </DetailsNav>

                {SubPages[subPage]}
                
            </PkmDetails>
        </Background>
    )
}

export default Info;