// Layout.js

import React from "react";
import NavBarCustom from "./navbar";
import Table from "./table";

const Layout = (props) => {
  console.log(props);
  const title =
    props.name == "user" ? "User Management" : "Employee Management";
  return (
    <div className="container-fluid">
      <NavBarCustom />
      <h2 className="text-center mt-4">{title}</h2>
      <div className="column">
        <nav className="col-md-2 col-lg-2 d-md-block bg-light sidebar"></nav>
        <Table name={props.name} data={props.data}/>
        <main className="col-md-10 col-lg-10 ms-sm-auto"></main>
      </div>
    </div>
  );
};

export default Layout;
