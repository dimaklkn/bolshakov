import "./styles/style.scss";
//import loader
import MyLoader from "./components/MyLoader";
import useLoader from "./customHooks";
//import ScrollToTop
import ScrollToTop from "react-scroll-to-top";
//import components
import Hero from "./components/Hero.js";
import Section from "./components/Section.js";
import Set1 from "./components/Set1.js";
import Set2 from "./components/Set2.js";
import Set3 from "./components/Set3.js";
import Set4 from "./components/Set4.js";
import Set5 from "./components/Set5.js";
import Set6 from "./components/Set6.js";
import Footer from "./components/Footer.js";

function App() {
  const isLoading = useLoader(2000);
  return (
    <div>
      {isLoading ? (
        <MyLoader />
      ) : (
        <>
          <ScrollToTop smooth={true} />
          <Hero />
          <Section classname="section section1" />
          <Set1 />
          <Section classname="section section2" />
          <Set2 />
          <Section classname="section section3" />
          <Set3 />
          <Section classname="section section4" />
          <Set4 />
          <Section classname="section section5" />
          <Set5 />
          <Section classname="section section6" />
          <Set6 />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
