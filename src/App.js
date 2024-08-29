import logo from "./logo.svg";
import "./App.css";

function rechne(zahl1, zahl2) {
  const result = zahl1 + zahl2;
  return result;
}

function App() {
  // Wir rufen eine Funktion auf:
  const result1 = rechne(12, 56);

  const result2 = rechne("anfang", "ende");

  const result3 = rechne(12, 54);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Mathe: {result1} {result2} {result3}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
