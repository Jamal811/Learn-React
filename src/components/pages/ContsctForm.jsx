import React, { useRef } from "react";
// form
const Ref = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;

    // do something with the name and email, like send them in an email

    // clear the input fields
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
  };

  return (
    <div className="container ">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            ref={nameInputRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            ref={emailInputRef}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Ref;
