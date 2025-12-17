// React
import { useState, useEffect } from 'react';

// Styles
import { CardList, LoadMoreBtn, BtnLoadMoreContainer } from './style'

// Components
import Card from '/src/components/Card/Card'

// API
import { GetPkmsFromApi } from '../../services/poke-api';

const LIMIT = 20;

function Home() {

    const [pkmList, setPkmList] = useState([]);
    const [offset, setOffset] = useState(0);
    
    function LoadPkm(limit = 20, offset = 0) {
      GetPkmsFromApi(limit , offset)
        .then(pokemons => {
          const newPkmList = [...pkmList, ...pokemons];
          setPkmList(newPkmList);
        })
        .catch((error) => console.error(error))
    }

    useEffect(() => {
      LoadPkm(LIMIT, offset)
    }, [, offset])

    function LoadMorePkmBtn() {
      setOffset(offset + LIMIT);
    }
    
    
    return (
      <>
        <h1>Pokédex</h1>
        <CardList>
          {pkmList.map((pokemon) => <Card key={pokemon.id} pkm={pokemon} /> )}
        </CardList>
        <BtnLoadMoreContainer>
          <LoadMoreBtn type="button" onClick={LoadMorePkmBtn}>Load More</LoadMoreBtn>
        </BtnLoadMoreContainer>
      </>
    );
}

export default Home;


