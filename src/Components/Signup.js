import {React, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import * as yup from 'yup'
import axios from 'axios';
import formSchema from '../validation/formSchema'
import FormTheme from '../Themes/Theme'

// Attempt to get textboxes to line up
// const BoxAlign = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
// `

const initialDisabled = true;

const initialSUvalues = {
    username: '', //textbox
    email: '', //textbox
    password: '', //textbox
    role: "", // radio button
    terms: false, // checkbox
};

const initialSUformErrors = {
    username: '',
    email: '',
    password: '',
    role: "",
    terms: false,
  };

export default function SignUp() {

    const [suFormValues, setSUformValues] = useState(initialSUvalues); // this is an object
    const [formSUerrors, setSUerrors] = useState(initialSUformErrors); // this is an object
    const [disabled, setDisabled] = useState(initialDisabled); // this is a boolean
    const { push } = useHistory();


    const change = (name, value) => {
        yup
          .reach(formSchema, name) // search the schema for 'name'
          .validate(value) // validate the entry (formValidation)
          .then(() => {
            setSUerrors({
              ...formSUerrors,
              [name]: "",
            });
          })
          .catch((error) => {
            setSUerrors({
              ...formSUerrors,
              // validation error from schema
              [name]: error.errors,
            });
          });
        setSUformValues({
          ...suFormValues,
          [name]: value,
        });
      };

      useEffect(() => {
    formSchema.isValid(suFormValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [suFormValues])

    const onSubmit = (event) => {
        event.preventDefault(); // stops page refresh,
        axios
        .post("https://tt-24-use-my-tech-stuff.herokuapp.com/api/users/signup", suFormValues)
        .then(res => {
        console.log('res', res);
        push("/login");
        })
        .catch(err => {
          console.log(err.response);
        })
    };

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);

    };


    return (
      <FormTheme>
        <form className='sign-up-form' onSubmit={onSubmit}>
            <h3>Sign up for an Account</h3>
            <div className='errors'>
                <div>{formSUerrors.username}</div>
                <div>{formSUerrors.email}</div>
                <div>{formSUerrors.password}</div>
                <div>{formSUerrors.terms}</div>
            </div>
            <br/>
            <div className='inputs'>
                <label>Username:
                    <input
                        name='username'
                        type='text'
                        placeholder='Choose a Username'
                        maxLength="30"
                        value={suFormValues.username}
                        onChange={onChange}
                    />
                </label>
                <br/>
                <label>Email:
                    <input
                        name='email'
                        type='text'
                        placeholder='Valid eMail Address'
                        maxLength="50"
                        value={suFormValues.email}
                        onChange={onChange}
                    />
                </label>
                <br/>
                <label>Password:
                    <input
                        type='password'
                        name='password'
                        placeholder='Choose a Password'
                        maxLength="30"
                        value={suFormValues.password}
                        onChange={onChange}
                    />
                </label>
                <br/>
                <label> Owner
                <input
                    type="radio"
                    name="role"
                    value="true"
                    checked={suFormValues.role === "true"}
                    onChange={onChange}
                />
                </label>
                    <br/>
                <label> Renter
                <input
                    type="radio"
                    name="role"
                    value="false"
                    checked={suFormValues.role === "false"}
                    onChange={onChange}
                />
                </label>
                <br/>
                <label>Terms and Conditions:
                    <input
                        type='checkbox'
                        name='terms'
                        checked={suFormValues.terms}
                        onChange={onChange}
                    />
                </label>
            </div>
            <button disabled={disabled}>Submit</button>
        </form>
      </FormTheme>
    )
}
