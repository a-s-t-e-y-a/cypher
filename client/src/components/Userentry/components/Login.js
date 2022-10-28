import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormActiom";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);
    const history = useNavigate();

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const login = async (e) => {
		e.preventDefault();
		console.log(JSON.stringify(loginState));
		let result = await fetch('http://127.0.0.1:8000/api/login', {
			method: 'POST',
			body: JSON.stringify(loginState),
			headers: {
				'Content-type': 'application/json',
				Accept: 'application/json',
			},
		});
		result = await result.json();

		if (
			result.message ==="Error enter all the required fields"
		) {
			alert('Username and password field cannot be empty');
		} else if (
			result.message==="User is not found kindly signup"
		) {
			alert('User cant found enter valid credentials');
		} else if (result.token) {
			console.log('congrats');
			localStorage.setItem('token', JSON.stringify(result.token));
			history('/serve');
		}
	};




    return(
        <form className="mt-8 space-y-6">
          <div className="-space-y-px">
            { fields.map(field=>(
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                ))}

        
        <FormAction handleSubmit={login} text="Login"/>
       
         </div>
      </form>
    );
}