import GenderRate from './GenderRate';
import Stats from './Stats';
import EggInfo from './EggInfo';

class Pokemon {
    constructor({id, name, type, types, sprite, species, height, weight, abilities, eggGroups, 
        eggCycle, hp, attack, defense, spAttack, spDefense, speed, maleRate, femaleRate}) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.types = types;
        this.sprite = sprite;

        this.species = species;
        this.height = height;
        this.weight = weight;
        this.abilities = abilities;
     
        this.genderRate = new GenderRate({maleRate, femaleRate});
        this.eggInfo = new EggInfo({eggGroups, eggCycle});
        this.Stats = new Stats({hp, attack, defense, spAttack, spDefense, speed});
    }
}


export default Pokemon;