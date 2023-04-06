import "./App.css";
import { useReducer } from "react";
//initial state
const initialState = {
  name: "",
  email: "",
  password: "",
  repeatpassword: "",
  termsAccepted: "",
};
//reducer function
const reducer = (state, action) => {
  return { ...state, [action.input]: action.value };
};
//validation
const validateState = (state) => {
  return (
    state.password === state.repeatpassword &&
    state.termsAccepted &&
    state.password.length > 3
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = (e) => {
    const { name, value, checked } = e.target;
    const action = {
      input: name,
      value: name === "termsAccepted" ? checked : value,
    };
    dispatch(action);
  };
  const handleClick = (e) => {
    e.preventDefault();
    alert(`Hey ${state.name} you have successfully registered`);
  };

  return (
    <div className="App">
      <div className="registerFormContainer">
        <h2 className="registerFormContainerHeadline">Register</h2>
        <form className="RegisterForm">
          <input
            className="TextInput"
            type="text"
            name="name"
            placeholder="Name"
            onChange={onChange}
          />
          <input
            className="TextInput"
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
          />
          <input
            className="TextInput"
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
          />
          <input
            className="TextInput"
            type="password"
            name="repeatpassword"
            placeholder="Repeat password"
            onChange={onChange}
          />
          <label className="TouCheckboxLabel">
            <input
              className="TouCheckbox"
              type="checkbox"
              name="termsAccepted"
              onChange={onChange}
            />
            Accept Terms of Use
          </label>
          <button
            onClick={handleClick}
            className={!validateState(state) ? "Disabled" : null}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
