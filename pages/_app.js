import "tailwindcss/tailwind.css";
import AOS from "aos";
import {useEffect} from "react"
import "../styles/dist/aos.css"
import "../styles/dist/aos"
import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
      delay: 100,
    });
  });

  return <Component {...pageProps} />
}

export default MyApp

// {
//   easing: "ease-out-cubic",
//   once: true,
//   offset: 120,
// }