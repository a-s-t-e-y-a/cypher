import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { signupFields } from "../constants/formFields"
import FormAction from "../components/FormActiom";
import Input from "./Input";

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setsignupState] = useState(fieldsState); // setting up the state
  const history = useNavigate();
  const handleChange = (f) => {
    setsignupState({ ...signupState, [f.target.id]: f.target.value });
  };

  async function signup(e) {
    e.preventDefault();

    console.log(JSON.stringify(signupState));
    let result = await fetch("http://127.0.0.1:8000/sign", {
      method: "POST",
      body: JSON.stringify(signupState),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    if (
      JSON.stringify(result.username) === '["This field may not be blank."]' ||
      JSON.stringify(result.password) === '["This field may not be blank."]'
    ) {
      alert("username or password field can't be empty");
    } else if (
      JSON.stringify(result.email) === '["Enter a valid email address."]'
    ) {
      ///verifying data
      alert("Enter a valid email address.");
    } else if (result.token) {
      history("/");
    }
  
  }

  return (
    <form className="mt-8 space-y-6">
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction text="Sign up" handle={Signup} />
      </div>
    </form>
  );
}