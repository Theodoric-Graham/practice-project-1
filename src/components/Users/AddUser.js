import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  //it returns a value that allows us to work with that element later
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    //error checks, required field
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    //changes to number
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
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

  //JSX Limitations "You can't have more than one root JSX element" use div as a
  //workaround (Doesn't have to be a div, any element will work)
  //A New problem: "<div> Soup", can end up with tons of unnecessary <div>s, which add no
  //semantic meanting or structure
  //by using a wrapper we can avoid a div soup and meet the JSX requirements of returning one element
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
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
