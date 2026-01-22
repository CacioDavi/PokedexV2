import { styled, css } from 'styled-components'
import { TypesList, ItemStyles, PokeName, Sprite, Type } from '../../components/Card/style'


const Background = styled.div`
    ${ItemStyles}
    height: 100%;
`

const Header = styled.section`
    ${ItemStyles}
    background-color: unset;
    margin: 0;
    border-radius: 0;

    height: 100%;
`

const HeaderNav = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 2.5rem 1rem;
`

const HeaderBtn = styled.button`

    color: #fff;
    border: none;
    background-color: rgba(0, 0, 0, 0);

    scale: 2;

    &:hover {
        cursor: pointer;
    }
`

const PkmName = styled(PokeName)`
    font-size: 2rem;
`

const PkmTypes = styled(TypesList)`
    flex-direction: row;
    margin: 0;
`

const PkmType = styled(Type)`
    margin: 0 .3rem;
`

const PkmSprite = styled(Sprite)`
    height: 14rem;
    align-self: center;
    transform: translateY(20px);

`
const PkmDetails = styled.section`
    display: flex;
    border-radius: 1rem 1rem 0 0;

    background-color: #fff;
    color: #000;

    flex-direction: column;

    padding: 0 1rem;
    height: 100%;

`
const DetailsNav = styled.nav`
    display: flex;
    margin: 1rem 0 0 0;
    justify-self: flex-start;

    list-style: none;
`
const NavButtons = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;

    padding: 0;

    list-style: none;
`
const NavButton = styled.button`
    background-color: unset;
    border: none;

    position: relative;

    &:hover {
        cursor: pointer;
    }

    &::after {
        display: block;
        position: absolute;
        content: '';

        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        background-color: #000;

        transform: scale(0);
    }

    ${({ $active }) => 
        $active &&
        css`
            &::after {
                transform: scale(1);
            }
        `};

`

export { 
    Background, Header, HeaderNav, HeaderBtn, 
    PkmName, PkmTypes, PkmType, PkmSprite, 
    PkmDetails, DetailsNav, NavButtons, 
    NavButton }
