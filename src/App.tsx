import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';


const Index: React.FC<{}> = ({}) => {

  return (
    <div className="App">
      <p>twerking hard</p>
    </div>
  );
}

const Blah: React.FC<{}> = ({}) => {

  return (
    <div className="App">
      <p>blah</p>
    </div>
  );
}


const App: React.FC<{}> = ({}) =>
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Index/>}/>
      <Route path="/blah" element={<Blah/>}/>
    </Routes>
  </BrowserRouter>

export default App;
