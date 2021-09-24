import React, { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {

  const [users, setUsers] = useState([]);
  
  //Fetch the data from the API
  const userInfo = async () => {
    const response = await fetch(`https://reqres.in/api/users?page=1`);
    const jsonresponse = await response.json();

    setUsers(jsonresponse.data);
  };
  
  return (
    <>
    <div className="header">
        <header>
        <h2>Social Cards </h2> 
        <button onClick={userInfo}>Get Users</button>
        </header>
    </div>
      <div className="grid">
        {users.map(user =>(
          <Card first_name= {user.first_name} 
                last_name = {user.last_name}
                email = {user.email}
                avatar = {user.avatar}
                key = {user.id}
          />
        ))}
      </div>
    </>
    );
};


export default App;