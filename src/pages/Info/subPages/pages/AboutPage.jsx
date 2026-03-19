// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';


// Style
import UBTable from '../../../../components/UnboardedTable/UBTable';
import { PkmInfoTable } from '../styles/aboutStyle'


function AboutPage({ pkm }) {
    return (
        <UBTable>
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
                <th colSpan={2}>Breeding</th>
            </tr>
            <tr>
                <td>Gender</td>
                <td>
                    <FontAwesomeIcon icon={faMars} style={{color: "#5394ea",}} />
                    {pkm.genderRate.maleRate}% 
                    <FontAwesomeIcon icon={faVenus} style={{color: "#dd5c85"}}/>
                    {pkm.genderRate.femaleRate}%
                </td>
            </tr>
            <tr>
                <td>Egg Groupes</td>
                <td>{pkm.eggInfo.eggGroups.join(', ')}</td>
            </tr>
            <tr>
                <td>Egg Cycle</td>
                <td>Grass</td>
            </tr>
        </UBTable>
    )
}

export default AboutPage;