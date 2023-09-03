// src/App.js

import React from 'react';
import Registration from '../components/registration';
import NavBarCustom from '../components/navbar';
import Auth from '../protected/auth';

function editProfile() {
  return (
    <div className="App">
        <NavBarCustom/>
      <header className="App-header">
        <Registration name="edit"/>
      </header>
    </div>
  );
}

export default Auth(editProfile);
