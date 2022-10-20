import React, { useState } from "react";
import Modal from "./Modal";

const Input = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const usernameChangeHandler = (event) => {
    if (event.target.value.trim().length >= 0) {
    }
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    if (event.target.value.trim().length >= 0) {
      setEnteredAge(event.target.value);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0) {
      console.log("not valid");

      setErrorMessage("username: Username is empty");
      return;
    }

    if (/[^a-zA-Z]/.test(enteredUsername)) {
      setErrorMessage("username: Username cannot contain numbers");
      return;
    }
    if (Math.sign(enteredAge) !== 1) {
      console.log("not a digit");
      setErrorMessage("age: Must be a number above 0");
      return;
    }

    props.onAddInfo(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className={"input-container"}>
          <strong>Username</strong>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <strong>Age (Years)</strong>
          <input type="text" value={enteredAge} onChange={ageChangeHandler} />
          <button type="submit">Add User</button>
        </div>
      </form>
      <Modal error={errorMessage} />
    </div>
  );
};

export default Input;
