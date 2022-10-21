import "./App.css";
import Input from "./Input";
import React, { useState } from "react";
import InputList from "./InputList";
import Modal from "./Modal";

function App() {
  const [userInfo, setUserInfo] = useState([
    // { text: "John (31 years old)", id: "g1" },
  ]);
  const [err, setErr] = useState(false);

  const errorCheck = (errorMessage) => {
    if (errorMessage) {
      setErr(true);
      console.log(err);
    }
  };

  const addInfoHandler = (enteredUsername, enteredAge) => {
    setUserInfo((prevInfo) => {
      const updatedInfo = [...prevInfo];
      updatedInfo.unshift({
        text: `${enteredUsername} (${enteredAge} years old)`,
        id: Math.random().toString(),
      });
      return updatedInfo;
    });
  };

  const deleteItemHandler = (infoId) => {
    setUserInfo((prevInfo) => {
      const updatedInfo = prevInfo.filter((info) => info.id !== infoId);
      return updatedInfo;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No users found. Maybe add one?</p>
  );

  if (userInfo.length > 0) {
    content = <InputList items={userInfo} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div className={`App `}>
      <div className={`${err ? "is-blurred" : ""}`}>
        <h1>Practice Project </h1>
        <Input onAddInfo={addInfoHandler} error={errorCheck} />
        {content}
      </div>
      <Modal />
    </div>
  );
}

export default App;
