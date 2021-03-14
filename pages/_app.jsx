import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      background-image: url('/back-ground.png');
      background-size: 100vh;
      overflow: hidden;
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
