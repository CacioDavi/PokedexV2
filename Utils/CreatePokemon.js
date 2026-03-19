import Pokemon from './PkmModels/Pokemon'

async function CreatePokemon(pokeDetails) {

    const specieInfo = await GetPkmSpecieInfo(pokeDetails.species.url);
    const stats = Object.fromEntries(pokeDetails.stats.map((stat) => {
        let statusName = stat.stat.name.replace('-', '_')
        return [statusName, stat.base_stat]
    }));
    const types = pokeDetails.types;
    const femaleRate = specieInfo.gender_rate * 12.5;

    const pokemon = new Pokemon({
        id: pokeDetails.id,
        name: pokeDetails.name,
        types,
        type: types[0].type,
        sprite: pokeDetails.sprites.other.dream_world.front_default,

        height: pokeDetails.height * 10,
        weight: pokeDetails.weight / 10,
        abilities: Object.entries(pokeDetails.abilities).map((entry) => {
            return entry[1].ability.name
        }),

        //Exige testes
        species: OrganizeSpecies(specieInfo),
        eggGroups: OrganizeEggGroups(specieInfo),

        hp: stats.hp,
        attack: await stats.attack,
        defense: stats.defense,
        spAttack: stats.special_attack,
        spDefense: stats.special_defense,
        speed: stats.speed,

        femaleRate,
        maleRate: 100 - femaleRate,
    });
    
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


async function GetPkmSpecieInfo(specieUrl) {
    const specieInfo = await fetch(specieUrl);
    const specieJson = await specieInfo.json();
    return specieJson;
}

export default CreatePokemon;