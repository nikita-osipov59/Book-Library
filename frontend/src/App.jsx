import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <header className="app-header">
          <h1>Book Library app</h1>
        </header>
      </div>
    </>
  );
}

export default App;
