import React, {useEffect, useState} from 'react'
import formSchema from '../validation/formSchema'
import * as yup from "yup";

// intial states
const initialSUvalues = {

	name: '',
	username: '', //textbox
	email: '', //textbox
	password: '', //textbox
	role: false, // checkbox
	terms: false, // checkbox
};

const initialSUformErrors = {
    name: '',
	username: '',
	email: '',
	password: '',
	role: "",
	terms: "",
  };

const initialDisabled = true;



const SignUp = () => {

    const [suFormValues, setSUformValues] = useState(initialSUvalues); // object
    const [formSUerrors, setSUerrors] = useState(initialSUformErrors); // object
    const [disabled, setDisabled] = useState(initialDisabled); // boolean


    // adjusting the status of disabled everytime values change
    useEffect(() => {
        formSchema
            .isValid(suFormValues)
            .then(valid => setDisabled(!valid))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [suFormValues])


//     // handles the validation
//     yup
//     .reach(formSchema, name) // get to this part of the schema
//     //we can then run validate using the value
//     .validate(value) // validate this value
//     .then(() => {
//       // happy path and clear the error
//       setSUerrors({
//         ...formSUerrors,
//         [name]: "",
//       });
//     })
//     // if the validation is unsuccessful, we can set the error message to the message
//     // returned from yup (that we created in our schema)
//     .catch((err) => {
//         setSUerrors({
//         ...formSUerrors,
//         // validation error from schema
//         [name]: err.errors[0],
//       });
//     });
//     setSUformValues({
//     ...suFormValues,
//     [name]: value, // NOT AN ARRAY
//   });

const onSubmit = (evt) => {
    evt.preventDefault();
  };

    return (
        <div className='sign-up-form'>
           <form onSubmit={onSubmit}>
            <h3>Sign up for an Account</h3>

            <div className='errors'>
                <div>{formSUerrors.name}</div>
                <div>{formSUerrors.username}</div>
                <div>{formSUerrors.email}</div>
                <div>{formSUerrors.password}</div>
            </div>

            <div className='inputs'>
                <label>Name:
                    <input
                        name='name'
                        type='text'
                        value={suFormValues.name}
                        placeholder='Please enter your full name'
                    />
                </label>
                <label>Username:
                    <input
                        name='username'
                        type='text'
                        value={suFormValues.username}
                        placeholder='Please enter your username'
                    />
                </label>
                <label>Email:
                    <input
                        name='email'
                        type='text'
                        value={suFormValues.email}
                    />
                </label>
                <label>Password:
                    <input
                        type='password'
                        name='password'
                        value={suFormValues.password}
                    />
                </label>
                <label> Owner
                <input
                    type="radio"
                    name="owner"
                    value="owner"
                    checked={suFormValues.role === "owner"}
                />
                </label>
                <label> Renter
                <input
                    type="radio"
                    name="renter"
                    value="renter"
                    checked={suFormValues.role === "renter"}
                />
                </label>
                <label>Terms and Conditions:
                    <input
                        type='checkbox'
                        name='terms'
                        value={suFormValues.terms}
                    />
                </label>
            </div>
            <button disabled={disabled}>Submit</button>
        </form>
        </div> )
        }
export default SignUp;