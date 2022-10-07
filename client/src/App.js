import React from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SissyHanks.com</h1>
        <h2>{!data ? "Loading..." : data}</h2>
        <p>coming soon</p>
      </header>
    </div>
  );
}

export default App;
