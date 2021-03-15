import React, { useState } from 'react';
import './App.css';

import Navbar from './Navbar';
import PersistentDrawerLeft from "./PersistentDrawerLeft";
import Map from './Map'
// import ControlledOpenSelect from './ControlledOpenSelect'

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
