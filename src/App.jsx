import { Author, Piano } from "./components";
import { PianoProvider } from "./providers/pianoProvider";

import "./App.css";

function App() {
  return (
    <main className="app">
      <PianoProvider>
        <Piano />
      </PianoProvider>

      <Author />
    </main>
  );
}

export default App;
