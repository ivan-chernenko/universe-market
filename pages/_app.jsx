import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      background-image: url('/background.png');
      background-size: 100vw 100vh;
      background-repeat: no-repeat;
      overflow: hidden;
      height: 100vh;
    }
    
    html {
      background: black;
    }
`;

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyle/>
    <Component {...pageProps} />
  </>
}

export default MyApp
