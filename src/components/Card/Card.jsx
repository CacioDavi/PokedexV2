
import { PokeCard, PokeNumber, PokeName, PokeDetail, TypesList, Type, Sprite } from './style'
import { useNavigate } from 'react-router-dom';


function Card({pkm}) {
  const {name, id, type, types, sprite} = pkm;
  const Navigate = useNavigate();
  function RedirectToPkmInfo() {
    //Navigate({ hash, pathname, search }, { flushSync, preventScrollReset, relative,replace, state, viewTransition })
    Navigate('/info', {state: JSON.stringify(pkm) })
  }
  
    return (
        <PokeCard onClick={() => RedirectToPkmInfo()} type={type}>
          <PokeNumber>#{id.toString().padStart(3, '0')}</PokeNumber>
          <PokeName>{name}</PokeName>
          <PokeDetail>
            <TypesList>
              {types.map(type => <Type key={type.slot} slot={type.slot}>{type.type.name}</Type>)}
            </TypesList>
            <Sprite src={sprite}
              alt={name}
              loading='lazy'/>
          </PokeDetail>
        </PokeCard>
    )
}

export default Card;