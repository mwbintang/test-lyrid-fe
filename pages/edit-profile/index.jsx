// src/App.js

import React, { useState } from "react";
import Registration from "../components/registration";
import NavBarCustom from "../components/navbar";
import Auth from "../protected/auth";
import { getEmployeeManagementById } from "../../services/employee-management";
import { getUserManagementById } from "../../services/user-management";
import { useEffect } from "react";

function editProfile() {
  return (
    <div className="App">
      <NavBarCustom />
      <header className="App-header">
        <Registration name="edit"/>
      </header>
    </div>
  );
}

export default Auth(editProfile);
