import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Works from "./Components/Works";


const App = () => {
  return (
    <>
        <div>
          <Navbar />
        </div>
        <About/>
        <Works/>
        <div>
          <Footer />
        </div>
    </>
  );
};

export default App;
