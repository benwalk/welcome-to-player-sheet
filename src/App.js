import React from "react";
import ImageMapper from "react-image-mapper";
import "./App.css";
import map from "./map";
import sheet from "./sheet.png";
import SimpleDialog from "./SimpleDialog";

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleClickOpen = (area, event) => {
    console.log("Area clicked: " + area._id);
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    console.log("Option selected: " + value);
    setSelectedValue(value);
  };

  return (
    <div className="App">
      <ImageMapper
        src={sheet}
        map={map}
        onClick={(area, index, event) => handleClickOpen(area, event)}
        strokeColor={"#B4E3DE"}
        width={1157}
        height={1157}
      />
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
