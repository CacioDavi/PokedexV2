import Pokemon from "./poke-model";


async function AplyOnModel(pokeDetails) {

    const pokemon = new Pokemon();

    pokemon.id = pokeDetails.id;
    pokemon.name = pokeDetails.name;

    pokemon.types = pokeDetails.types;
    pokemon.type = pokemon.types[0].type;

    pokemon.sprite = pokeDetails.sprites.other.dream_world.front_default;


    const specieInfo = await GetPkmSpecieInfo(pokeDetails.species.url);
    
    pokemon.height = pokeDetails.height;
    pokemon.weight = pokeDetails.weight;
    pokemon.abilities = Object.entries(pokeDetails.abilities).map((entry) => {
        return entry[1].ability.name
    });

    pokemon.species = OrganizeSpecies(specieInfo);
    pokemon.eggGroups = OrganizeEggGroups(specieInfo);

    const stats = Object.fromEntries(pokeDetails.stats.map((stat) => {
        stat.stat.name.replace('-', '_')
        return [stat.stat.name, stat.base_stat]
    }))
    pokemon.hp = stats.hp;
    pokemon.attack = await stats.attack;
    pokemon.defense = stats.defense;
    pokemon.spAttack = stats.special_attack;
    pokemon.spDefense = stats.special_defense;
    pokemon.speed = stats.speed;
    
    return pokemon;
}

function OrganizeEggGroups(specieInfo) {
    let groups = specieInfo.egg_groups;
    groups = groups.map(group => group.name);
}

function OrganizeSpecies(specieInfo) {
    const genera = (specieInfo.genera);
    const genEnglish = Object.fromEntries(Object.entries(genera).filter(([chave, valor]) => valor.language.name == 'en'));
    const gen = genEnglish[7].genus;
    return gen;
}


function GetPkmSpecieInfo(specieUrl) {
    return fetch(specieUrl)
        .then(res => res.json())
        .then(specieInfo => specieInfo)
        // .then(specieInfo => {
        //     const genera = (specieInfo.genera);
        //     const genEnglish = Object.fromEntries(Object.entries(genera)
        //         .filter(([chave, valor]) => valor.language.name == 'en'));
        //     const gen = genEnglish[7].genus;
        //     return gen;
        // })
}

function GetPkmDetails(pokemonURL) {
    return fetch(pokemonURL)
        .then(response => response.json())
        .then(AplyOnModel)
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