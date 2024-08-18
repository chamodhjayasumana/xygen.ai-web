import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Features from "./components/Features/features";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import ContactInfo from "./components/ContactInfo/contactInfo";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Features/>
      <Works/>
      <Contact/>
      <ContactInfo/>
    </div>
  );
}

export default App;
