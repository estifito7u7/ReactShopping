import React,{useState} from 'react'

import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./components/Pages.js";
import "boxicons";

function App() {



  return (
    <DataProvider>
    <div className="App">
      <Router>
  
      <Pages />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
