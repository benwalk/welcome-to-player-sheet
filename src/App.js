import React from "react";
import ImageMapper from "react-image-mapper";
import "./App.css";
import map from "./map";

const url = "./sheet.png";

function App() {
  return (
    <div className="App">
      <ImageMapper
        src={url}
        map={map}
        fillColor={"#B4E3DE"}
        width={1157}
        height={1157}
      />
    </div>
  );
}

export default App;
