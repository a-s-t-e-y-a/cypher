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
    console.log(signupState)
    console.log(JSON.stringify(signupState));
    let result = await fetch("http://localhost:8000/api/signup", {
      method: "POST",
      body: JSON.stringify(signupState),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log(result.error);
    if (result.error==="Enter all details") {
      alert("fields cant be empty");
    } else if (
      result.error === 'Email already exist kindly re-enter details'
    ) {
      ///verifying data
      alert("Email already exist");
    }else if (
      result.error === "Username already exist kindly re-enter details"
    ) {
      ///verifying data
      alert("Username  already exist");
    } 
    else if (result.Message) {
      alert(result.Message)
      history("/serve/login");
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
        <FormAction text="Sign up" handleSubmit={signup} />
      </div>
    </form>
  );
}