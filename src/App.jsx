import "./App.css";
import About from "./Components/About";
import Cursor from "./Components/Cursor";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Works from "./Components/Works";

const App = () => {

  return (
    <>
    <Cursor/>
      <div className="bg-gray-600 w-full">
        <Navbar />
        <Hero />
        <div>
        <About />
        </div>
        <div>
        <Works />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
