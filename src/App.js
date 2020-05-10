import React from "react";
import ImageMapper from "react-image-mapper";
import "./App.css";
import map from "./map";
import sheet from "./sheet.png";

function App() {
  return (
    <div className="App">
      <ImageMapper
        src={sheet}
        map={map}
        strokeColor={"#B4E3DE"}
        width={1157}
        height={1157}
      />
    </div>
  );
}

export default App;
