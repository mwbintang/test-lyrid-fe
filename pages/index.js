import React from 'react';
import Layout from './components/layout';
import { useEffect, useState } from 'react';
import { getEmployeeManagement } from '../services/employee-management';

function App() {
  const [employeeManagements, setEmployeeManagements] = useState([]);

  const getEmployeeManagementData = async () => {
    try{
      console.log("teeeeest")
      const value = await getEmployeeManagement();
      console.log(value,"valueeeee")
      setEmployeeManagements(value.rows);
    }catch(e){
      console.log(e,'erroooooooooor')
    }
  };
  console.log(employeeManagements)

  useEffect(() => {
    console.log("useeffect")
    getEmployeeManagementData();
  }, []);
  return (
    <div className="App">
      <Layout name="employee" data={employeeManagements}/>
    </div>
  );
}

export default App;