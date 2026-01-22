import styled from 'styled-components';

const Evolutions = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 1rem;
`

const Evolution = styled.div`
    display: flex;

    padding: .5rem;

    width: 100%;

    border: .1rem solid #000;
`;

const Pokemon = styled.div`

`;
const PkmName = styled.span`
    text-align: center;
    display: inline-block;
    width: 100%;
`;

const Process = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
`

const PkmImage = styled.img`
    max-width: 100%;
`

const EvoReq = styled.p`

`;


export { Evolutions, Evolution, Pokemon, PkmName, PkmImage, EvoReq, Process };