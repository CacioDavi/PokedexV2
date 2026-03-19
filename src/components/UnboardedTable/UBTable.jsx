import { PkmInfoTable } from './style'

function UBTable({children}) {
    


    return (
        <PkmInfoTable>
            <tbody>
               {children} 
            </tbody>
        </PkmInfoTable>
    )
}

export default UBTable;