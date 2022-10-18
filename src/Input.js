import React, { useState } from "react";
import InvalidUsername from "./InvalidUsername";
import InvalidAge from "./InvalidAge";

const Input = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const usernameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0) {
      console.log("not valid");

      setIsValid(false);
      <InvalidUsername />;
    }
    if (Math.sign(enteredAge) !== 1) {
      console.log("not a digit");

      setIsValid(false);
      return <InvalidAge />;
    }
    props.onAddInfo(enteredUsername, enteredAge);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={"input-container"}>
        <strong>Username</strong>
        <input type="text" onChange={usernameChangeHandler} />
        <strong>Age (Years)</strong>
        <input type="text" onChange={ageChangeHandler} />
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default Input;
