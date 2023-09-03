import React from 'react';
import Layout from '../components/layout';
import { getUserManagement } from '../../services/user-management';
import { useState, useEffect } from 'react';
import Auth from '../protected/auth';

function userManagement() {
  const [userManagements, setUserManagements] = useState([]);

  const getUserManagementData = async () => {
    try{
      console.log("teeeeest")
      const value = await getUserManagement();
      console.log(value,"valueeeee")
      setUserManagements(value.rows);
    }catch(e){
      console.log(e,'erroooooooooor')
    }
  };
  console.log(userManagements)

  useEffect(() => {
    console.log("useeffect")
    getUserManagementData();
  }, []);
  return (
    <div className="App">
      <Layout name="user" data={userManagements} />
    </div>
  );
}

export default Auth(userManagement);