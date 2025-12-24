import Pokemon from './poke-model'

async function CreatePokemon(pokeDetails) {

    const pokemon = new Pokemon();

    pokemon.id = pokeDetails.id;
    pokemon.name = pokeDetails.name;

    pokemon.types = pokeDetails.types;
    pokemon.type = pokemon.types[0].type;

    pokemon.sprite = pokeDetails.sprites.other.dream_world.front_default;


    const specieInfo = await GetPkmSpecieInfo(pokeDetails.species.url);
    
    pokemon.height = pokeDetails.height * 10;
    pokemon.weight = pokeDetails.weight / 10;
    pokemon.abilities = Object.entries(pokeDetails.abilities).map((entry) => {
        return entry[1].ability.name
    });

    pokemon.species = OrganizeSpecies(specieInfo);
    pokemon.eggGroups = OrganizeEggGroups(specieInfo);

    // Stats
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

    pokemon.genderRate.femaleRate = specieInfo.gender_rate * 12.5;
    pokemon.genderRate.maleRate = 100 - pokemon.genderRate.femaleRate;
    
    return pokemon;
}

function OrganizeEggGroups(specieInfo) {
    let groups = specieInfo.egg_groups;
    groups = groups.map(group => group.name);
    return groups;
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
}

export default CreatePokemon;