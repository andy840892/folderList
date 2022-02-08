import React from 'react'; 
import './App.css';
import { Button } from '@mui/material';
import FolderList from './FolderList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <FolderList />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button variant="text" color="primary">Tex1t</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
