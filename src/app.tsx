
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Demo from "./sections/Demo";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return <div className="container mx-auto max-w-7xl">
    <Navbar />
    <Hero />
    <About />
    <Experiences />
    <Projects />
    {/*Languages / skills*/}
    <Demo />
    <Contact />
    <Footer />
  </div>;
};

export default App;