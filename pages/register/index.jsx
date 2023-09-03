// src/App.js

import React from 'react';
import Registration from '../components/registration';
import noAuth from '../protected/noAuth';

function Register() {
  return (
    <div className="App">
      <header className="App-header">
        <Registration />
      </header>
    </div>
  );
}

export default noAuth(Register);
