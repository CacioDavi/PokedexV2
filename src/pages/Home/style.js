import styled from "styled-components"

const CardList = styled.ol`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    padding: 0;


    @media (max-width: 375px) {
        grid-template-columns: 1fr;
    }

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (min-width: 1440px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }

`
const BtnLoadMoreContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;

    width: 100%;

`

const LoadMoreBtn = styled.button`
    border-radius: 1rem;
    background-color: #6e71db;
    border: 0;
    padding: .3rem .5rem;
    margin: .5rem;

    width: 100%;

    color: #fff;

    &:hover {
        cursor: pointer;
    }

`
export { CardList, LoadMoreBtn, BtnLoadMoreContainer}
