import logo from "./logo.jpeg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="hero-image img-fluid">
          <div className="hero-text">
            <header className="App-header">
              <img src={logo} className="App-logo img-fluid" alt="logo" />
              <h1>Dictionary App</h1>
            </header>
          </div>
        </div>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Elspeth Humble</footer>
      </div>
    </div>
  );
}
