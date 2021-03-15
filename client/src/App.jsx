import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import Map from './components/Map'

const App = () => {

  return(
    <div>
      <Navbar />
      <PersistentDrawerLeft />  
      <Map />
    </div>
  )

};

export default App;
