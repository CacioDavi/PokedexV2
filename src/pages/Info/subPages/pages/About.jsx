// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';


// Style
import { PkmInfoTable } from '../styles/aboutStyle'


function About({ pkm }) {

    return (
        <PkmInfoTable>
            <tr>
                <td>Species</td>
                <td>{pkm.species}</td>
            </tr>
            <tr>
                <td>Height</td>
                <td>{pkm.height} cm</td>
            </tr>
            <tr>
                <td>Weight</td>
                <td>{pkm.weight.toString().replace('.', ',')} kg</td>
            </tr>
            <tr>
                <td>Abilities</td>
                <td>{pkm.abilities.join(', ')}</td>
                
            </tr>
            <tr>
                <th>Breeding</th>
            </tr>
            <tr>
                <td>Gender</td>
                <td>
                    <FontAwesomeIcon icon={faVenus} style={{color: "#5394ea",}} />
                    {pkm.genderRate.maleRate}% 
                    <FontAwesomeIcon icon={faVenus} style={{color: "#dd5c85"}}/>
                    {pkm.genderRate.femaleRate}%
                </td>
            </tr>
            <tr>
                <td>Egg Groupes</td>
                <td>{pkm.eggGroups.join(', ')}</td>
            </tr>
            <tr>
                <td>Egg Cycle</td>
                <td>Grass</td>
            </tr>
        </PkmInfoTable>
    )
}

export default About;