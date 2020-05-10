import React from "react";
import ImageMapper from "react-image-mapper";
import logo from "./logo.svg";
import "./App.css";
import map from "./map";

const url = "./player-sheet.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageMapper
          src={url}
          map={map}
          fillColor={"#B4E3DE"}
          width={1157}
          height={1157}
        />
      </header>
    </div>
  );
}

export default App;
