import { StatRow } from './style'

export function Stat ({statName, statValue, statScale}) {

    /*
    statScale.min
    statScale.max
    statScale.low
    statScale.optimum
    statScale.high
    */

    return (
        <>
        <StatRow>
            <td>{statName}</td>
            <td>{statValue}</td>
            <td>
                <meter 
                    value   = {statValue} 
                    min     = {0} 
                    max     = {statScale.max} 
                    low     = {statScale.low} 
                    optimum = {statScale.optimum} 
                    high    = {statScale.high}
                ></meter>
            </td>
        </StatRow>
        </>
    )
}