// src/App.js

import React from 'react';
import Registration from '../components/registration';
import NavBarCustom from '../components/navbar';

function editProfile() {
  return (
    <div className="App">
        <NavBarCustom/>
      <header className="App-header">
        <Registration name="edit" />
      </header>
    </div>
  );
}

export default editProfile;
