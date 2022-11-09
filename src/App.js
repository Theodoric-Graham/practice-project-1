import React, { useState } from "react";
import "./App.css";

import UsersList from "./components/Users/UsersList";
import AddUser from "./components/Users/AddUser";

function App() {
  // ****** MY WAY *******
  // const [userInfo, setUserInfo] = useState([
  //   // { text: "John (31 years old)", id: "g1" },
  // ]);
  // const [err, setErr] = useState("");

  // const errorCheck = (errorMessage) => {
  //   setErr(errorMessage);
  // };

  // const addInfoHandler = (enteredUsername, enteredAge) => {
  //   setUserInfo((prevInfo) => {
  //     const updatedInfo = [...prevInfo];
  //     updatedInfo.unshift({
  //       text: `${enteredUsername} (${enteredAge} years old)`,
  //       id: Math.random().toString(),
  //     });
  //     return updatedInfo;
  //   });
  // };

  // const deleteItemHandler = (infoId) => {
  //   setUserInfo((prevInfo) => {
  //     const updatedInfo = prevInfo.filter((info) => info.id !== infoId);
  //     return updatedInfo;
  //   });
  // };

  // let content = (
  //   <p style={{ textAlign: "center" }}>No users found. Maybe add one?</p>
  // );

  // if (userInfo.length > 0) {
  //   content = <InputList items={userInfo} onDeleteItem={deleteItemHandler} />;
  // }
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
