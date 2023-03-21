import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="hero-image img-fluid"></div>
        <main>
          <Dictionary />
        </main>
        <footer className="footer-text">Coded by Elspeth Humble</footer>
      </div>
    </div>
  );
}
