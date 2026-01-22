import styled from "styled-components";

const PkmInfoTable = styled.table`
    height: 100%;

    text-transform: capitalize;
    td:nth-of-type(odd) {
        color: #444444;
    }

    th {
        text-align: start;
    }
`

export { PkmInfoTable }