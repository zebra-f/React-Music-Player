// styles
import "./styles/app.scss";
// components
import Player from "./components/Player";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <h4>React Music Player</h4>
      <Song />
      <Player />
    </div>
  );
}

export default App;
