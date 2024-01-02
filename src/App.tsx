import React from 'react';
import logo from './logo.svg';
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import './App.css';
import styles from "./App.module.css"


const Index: React.FC<{}> = ({}) => {

  return (
    <div className="App">
      <p>twerking hard</p>
      <Link to="/blah">Blah</Link>
    </div>
  );
}

const Blah: React.FC<{}> = ({}) => (
  <div className="App">
    <p>blah</p>
  </div>
)

const Header: React.FC<{}> = ({}) => {
  return <div className={styles.header}>
      <p>blah</p>
      <p>blah</p>
      <p>blah</p>
      <p>blah</p>
  </div>
}

const Page: React.FC<{}> = ({}) => {

  return (
    <div className={styles.container}>
      <Header />
      <p>blah</p>
      <div className={styles.footer}>
        <p>blah</p>
      </div>
    </div>
  );
}

const App: React.FC<{}> = ({}) =>
  <HashRouter>
    <Routes>
      <Route path="" element={<Page/>}/>
      <Route path="/blah" element={<Blah/>}/>
    </Routes>
  </HashRouter>

export default App;
