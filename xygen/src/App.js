import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Features from "./components/Features/features";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Features/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
