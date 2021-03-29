import React, {useEffect} from 'react'
import formSchema from '../validation/formSchema'
import * as yup from "yup";

const SignUp = (props) => {
    const {values, errors, disabled} = props

    useEffect(() => {
        formSchema
            .isValid(values)
            .then(valid => props.setDisabled(!valid))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values])

    useEffect(() => {
        props.clearForm();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleChanges = (event) => {
        const {value, name} = event.target
        yup
        .reach(formSchema,name)
        .validate(value)
        .then(() => {
            props.setErrors(name ,'')
        })
        .catch(err => {
            props.setErrors(name, err.errors[0])
        })
        props.setValues(value,name)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submit()
    }
    return (
        <div className='sign-up-form'>
           <form onSubmit={handleSubmit}>
            <h3>Sign up for an Account</h3>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>

            <div className='inputs'>
                <label>Name:
                    <input
                        name='name'
                        type='text'
                        onChange={handleChanges}
                        value={values.username}
                        placeholder='Please enter your full name'
                    />
                </label>
                <label>Username:
                    <input
                        name='username'
                        type='text'
                        onChange={handleChanges}
                        value={values.username}
                        placeholder='Please enter your username'
                    />
                </label>
                <label>Email:
                    <input
                        name='email'
                        type='text'
                        onChange={handleChanges}
                        value={values.email}
                    />
                </label>
                <label>Password:
                    <input
                        type='password'
                        name='password'
                        onChange={handleChanges}
                        value={values.password}
                    />
                </label>
                <label>Terms and Conditions:
                    <input
                        type='checkbox'
                        name='password'
                        onChange={handleChanges}
                        value={values.terms}
                    />
                </label>
            </div>
            <button disabled={disabled}>Submit</button>
        </form>
        </div>
    )
}
export default SignUp;