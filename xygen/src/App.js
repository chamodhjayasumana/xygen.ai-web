import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Features from "./components/Features/features";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Features/>
    </div>
  );
}

export default App;
