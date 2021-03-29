import React, {useEffect} from 'react'
import { connect } from "react-redux";
import formSchema from '../validation/formSchema'
import {signUpSubmit, setValues, setDisabled, setErrors, clearForm} from '../actions/signUpActions'
import * as yup from "yup";

const SignUp = (props) => {
    const {values, errors, disabled} = props
    const {push} = props.history

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

    const handleChanges = (e) => {
        const {value, name} = e.target
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
            props.signUpSubmit(values.username, values.password, values.email, push)
        }

    return (

        <div className='sign-up-form'>
           <form onSubmit={handleSubmit}>
            <h3>Please Enter Your Information</h3>

            <div className='errors'>
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
                        value={values.name}
                        placeholder='Enter Full Name'
                    />
                </label>
                <label>Username:
                    <input
                        name='username'
                        type='text'
                        onChange={handleChanges}
                        value={values.username}
                        placeholder='Enter a Username'
                    />
                </label>
                <label>Email:
                    <input
                        name='email'
                        type='text'
                        onChange={handleChanges}
                        value={values.email}
                        placeholder='Email'
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
            </div>
            <button disabled={disabled}>Submit</button>
        </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        values:state.signup.formValues,
        errors:state.signup.formErrors,
        disabled:state.signup.disabled
    }
}
export default connect(mapStateToProps, {setErrors, signUpSubmit,setValues,setDisabled, clearForm})(SignUp);