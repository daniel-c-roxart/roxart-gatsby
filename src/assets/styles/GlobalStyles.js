import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    *, ::after, ::before {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        font-size: 1.6rem;
        margin: 0;
        padding: 82px 0 0;
        font-family: "Open Sans";
        font-weight: 300;
    }
`;

export default GlobalStyle;
