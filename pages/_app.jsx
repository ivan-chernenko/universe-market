import {createGlobalStyle} from "styled-components";
import {useEffect, useState} from "react";

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

const IMAGES = [
    '/background.png',
    '/logo.png',
    '/clouds.png',
    '/red-planet.jpeg',
    '/milk-planet.jpg',
    '/raper.png',
    '/smoker.png',
    '/smoker-hovered.png',
    '/football-fan.png',
    '/football-fan-hovered.png',
    '/rocket.png',
    '/temperature-planet.jpg',
    '/gangsta.png',
    '/gangsta-hovered.png',
    '/galaxy-planet.jpg',
    '/green-planet.jpg',
    '/luna-like-planet.jpg',
];

function MyApp({Component, pageProps}) {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const loadImage = image => {
            return new Promise((resolve, reject) => {
                const loadImg = new Image();
                loadImg.src = image;
                loadImg.onload = () => resolve(image);

                loadImg.onerror = err => reject(err)
            })
        };

        Promise.all(IMAGES.map(image => loadImage(image)))
            .then(() => setImagesLoaded(true))
            .catch(err => console.log("Failed to load images", err))
    }, []);
    return <>
        {
            imagesLoaded && <>
                <GlobalStyle/>
                <Component {...pageProps} />
            </>
        }
    </>
}

export default MyApp
