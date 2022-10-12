import React, { useState } from "react";

const Input = (props) => {
  const [inputVal, setInputVal] = useState("");
  const inputValHandler = (event) => {
    setInputVal(event.target.value);
  };
  let pKey = localStorage.getItem("key");
  const submitHandler = (event) => {
    console.log("Submit button clicked");

    let pKey = localStorage.getItem("key");

    if (!pKey) {
      localStorage.setItem("key", JSON.stringify(inputVal));
      props.setShowCommits(true);
      setInputVal("");
      props.refreshButtonHandler();
    } else {
      alert("Incorrect password");
      setInputVal("");
    }

    event.preventDefault();
  };
  const clearPasswordHandler = () => {
    localStorage.removeItem("key");
    props.setShowCommits(false);
  };
  return (
    <div className="container my-3 border-bottom">
      <form action="/" onSubmit={submitHandler}>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={inputVal}
              onChange={inputValHandler}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark my-3"
            onClick={clearPasswordHandler}
            disabled={!pKey}
          >
            Forget password
          </button>
          <button type="submit" className="btn btn-dark my-3" disabled={pKey}>
            Submit password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
