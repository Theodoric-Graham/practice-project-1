import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // ****** MY WAY *******
  // const usernameChangeHandler = (event) => {
  //   if (event.target.value.trim().length >= 0) {
  //   }
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   if (event.target.value.trim().length >= 0) {
  //     setEnteredAge(event.target.value);
  //   }
  // };

  // const addUserHandler = (event) => {
  //   event.preventDefault();
  //   if (enteredUsername.trim().length === 0) {
  //     // console.log("not valid");
  //     props.error("username: Username is empty");
  //     return;
  //   }

  //   if (/[^a-zA-Z]/.test(enteredUsername)) {
  //     props.error("username: Username cannot contain numbers");
  //     return;
  //   }

  //   if (Math.sign(enteredAge) !== 1) {
  //     // console.log("not a digit");
  //     props.error("age: Must be a number above 0");
  //     return;
  //   }

  //   props.onAddInfo(enteredUsername, enteredAge);
  //   setEnteredUsername("");
  //   setEnteredAge("");
  // };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );

  // ****** MY WAY *******
  //   return (
  //     <div>
  //       <form onSubmit={formSubmitHandler}>
  //         <div className={"input-container"}>
  //           <strong>Username</strong>
  //           <input
  //             type="text"
  //             value={enteredUsername}
  //             onChange={usernameChangeHandler}
  //           />
  //           <strong>Age (Years)</strong>
  //           <input type="text" value={enteredAge} onChange={ageChangeHandler} />
  //           <button type="submit">Add User</button>
  //         </div>
  //       </form>
  //     </div>
  //   );
};

export default AddUser;
