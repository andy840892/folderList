import React from "react";
import "./App.css";
import { Button } from "@mui/material";
import FolderList from "./FolderList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FolderList />
        <Button variant="text" color="primary">
          CLick
        </Button>
      </header>
    </div>
  );
}

export default App;
