import styled, { css } from 'styled-components'

const pkmTypes = {
    water:    '#0091ff',
    bug:      '#89b315ff',
    dragon:   '#8150f2',
    electric: '#caa501ff',
    fighting: '#cc4f41',
    fire:     '#ce3b21ff',
    ghost:    '#6b5cbf',
    grass:    '#4ebe4eff',
    normal:   '#909282ff',
    poison:   '#ba479b',
    psychic:  '#ff3898',
    dark:     '#7d5442',
    flying:   '#6369e0ff',
    rock:     '#bdad60',
    steel:    '#acaabd',
    fairy:    '#c563baff',
    ice:      '#33c9ff',
    ground:   '#caa93cff',
}

const ItemStyles = css`
    color: #fff;
    background-color: ${props => {
        const type = props.type
        return pkmTypes[type.name]

    }};

    //filter: brightness(.7);

    display: flex;
    flex-direction: column;

    margin: .2rem;
    padding: .5rem;

    border-radius: 1rem;

    transition: scale .1s;
`

const PokeCard = styled.li`
    ${ItemStyles}
    &:hover {
        cursor: pointer;
        scale: 1.05;
        border: 2px #000 solid;
        box-shadow: 0 12px 15px 10px rgba(0,0,0,0.64);
    }
`

const PokeNumber = styled.span`
    align-self: flex-end;
    font-weight: bold;
`

const PokeName = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    
    text-transform: capitalize;

    margin: .2rem 0;
`

const PokeDetail = styled.div`

    display: flex;
    justify-content: space-between;

`
const TypesList = styled.ol`
    list-style: none;
    display: flex;
    flex-direction: column;

    padding: 0;
`



const Type = styled.li`
    background-color: ${props => {
        const type = props.children
        return pkmTypes[type]
    }};

    color: #fff;

    filter: brightness(1.2);

    text-align: center;
    text-transform: capitalize;

    font-size: .7rem;

    padding: .2rem .5rem;
    margin: .5rem .1rem 0;

    border-radius: 1rem;

    max-width: 3.5rem;
`
const Sprite = styled.img`
    max-width: 60%;
    height: 5rem;
`

export { PokeCard, PokeNumber, PokeName, PokeDetail, TypesList, Type, Sprite, ItemStyles }

