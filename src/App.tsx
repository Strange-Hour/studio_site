import "./App.css";

import transparentLogo from "./assets/logo_transparent.png";

function App() {
  console.log(
    "%c 🕔 The hour grows stranger by the minute.",
    "background-color:#CD1850; padding:10px;"
  );
  console.log("%c Tick Tick Tick", "background-color:#458099; padding:10px;");
  return (
    <div className="App">
      <div className="hero">
        <div className="image-container">
          <img src={transparentLogo} alt="Company Logo" />
        </div>
        <h3>Development Studio</h3>
        <h1>🕑 Coming Soon</h1>
        <h2>
          A series of 🎮 games in an expansive 😱 horror 🌌 sci-fi universe.
        </h2>
      </div>
    </div>
  );
}

export default App;
