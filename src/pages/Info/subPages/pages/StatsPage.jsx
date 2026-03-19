import UBTable from "../../../../components/UnboardedTable/UBTable";
import { sumValues } from "../../../../../Utils/object-operations/object-operations";

import { Stat } from "../../../../components/Stat/Stat";

import statScale from "../../../../assets/StatsMetrics.json"

function StatsPage({ pkm }) {
    const PkmTotalStats = sumValues(pkm.Stats);
    const PkmMediaStats = 255;
    console.log(statScale)
    return (
        <>
        <UBTable>
            <Stat statName={'HP'} statValue={pkm.Stats.hp} statScale={statScale} />
            <Stat statName={'Attack'} statValue={pkm.Stats.attack} statScale={statScale} />
            <Stat statName={'Defense'} statValue={pkm.Stats.defense} statScale={statScale} />
            <Stat statName={'Sp. Atk'} statValue={pkm.Stats.spAttack} statScale={statScale} />
            <Stat statName={'Sp. Def'} statValue={pkm.Stats.spDefense} statScale={statScale} />
            <Stat statName={'Speed'} statValue={pkm.Stats.speed} statScale={statScale} />
            <Stat statName={'Total'} statValue={PkmTotalStats} statScale={statScale} />
        </UBTable>
        </>
    )
}

export default StatsPage;