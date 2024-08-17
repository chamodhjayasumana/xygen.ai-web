import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Features from "./components/Features/features";
import Works from "./components/Works/works";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Features/>
      <Works/>
    </div>
  );
}

export default App;
