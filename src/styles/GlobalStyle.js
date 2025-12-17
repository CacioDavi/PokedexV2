import { createGlobalStyle } from "styled-components"

const globalStyles = createGlobalStyle`

    * {
        font-family: 'Roboto', 'sans-serif';
        box-sizing: border-box;
    }

    body {
        width: 100dvw;
        height: 100dvh;

        background-color: #f7f9fc;
    }

`;

export default globalStyles;
