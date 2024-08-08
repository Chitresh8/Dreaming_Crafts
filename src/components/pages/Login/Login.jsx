import { useState } from "react";
import "./login.css";

export const Login = () => {
  const [multipleInputs, setMultipleInputs] = useState([
    { type: "text", name: "First Name", placeholder: "First Name", value: "" },
    { type: "text", name: "Last Name", placeholder: "Last Name", value: "" },
    { type: "email", name: "Email ID", placeholder: "Email ID", value: "" },
    {
      type: "password",
      name: "Password",
      placeholder: "Password",
      value: "",
    },
  ]);

  const multipleInputsHandler = (event, i) => {
    const multipleInputsUpdate = [...multipleInputs];
    multipleInputsUpdate[i].value = event.target.value;
    setMultipleInputs(multipleInputsUpdate);
  };

  const resetClickHandler = () => {
    const resetAllInputs = multipleInputs.map((el) => {
      return { ...el, value: "" };
    });
    setMultipleInputs(resetAllInputs);
  };
  return (
    <div>
      <h3>Login to Dreaming Crafts</h3>
      {multipleInputs.map((el, i) => {
        return (
          <div key={el.name}>
            <label>{el.name}</label>
            <input
              type={el.type}
              name={el.name}
              placeholder={el.placeholder}
              value={el.value}
              onChange={(event) => {
                multipleInputsHandler(event, i);
              }}
            />
          </div>
        );
      })}
      <button>Login</button>
      <button onClick={resetClickHandler}>Reset</button>
      <p>
        If you&apos;re a new user? Then Click <button>Sign Up</button> Button
      </p>
    </div>
  );
};
