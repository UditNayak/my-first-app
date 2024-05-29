import logo from "./logo.svg";
import "./App.css";
import Products from "./Products";
import { a, b } from "./Products"; // object destructuring
import Navbar from "./Comonents/Navbar";
import Typewritter from "./Comonents/Typewritter";

function App() {
  return (
    <div className="App">
      <header className="navbar-container">
        <img src={logo} className="app-logo" alt="logo" />
        <Navbar />
      </header>
      <Typewritter 
        text={[
          "Hello My name is Udit",
          "I am a Full Stack Developer",
          "I am a MERN Stack Developer",
        ]}
        typingSpeed={100}
        erasingSpeed={50}
        duration={2000}
      />
    </div>
  );
}

export default App;
