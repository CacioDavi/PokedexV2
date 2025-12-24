import CreatePokemon from "../../Utils/CreatePokemon"

function GetPkmDetails(pokemonURL) {
    return fetch(pokemonURL)
        .then(response => response.json())
        .then(CreatePokemon)
}

function GetPkmsFromApi(limit, offset = 0){
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    return fetch(url)
    .then(response => response.json())
    .then(bodyJson => bodyJson.results)
    .then(pokemons => pokemons.map(pokemon => GetPkmDetails(pokemon.url)))
    .then(detailRequests => Promise.all(detailRequests))
    .then(pkmDetails => pkmDetails)
}

export { GetPkmsFromApi, GetPkmDetails }