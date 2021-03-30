import {React, useEffect} from 'react'

export default function SignUp(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    const onChange = (event) => {
        const { name, value, type, checked } = event.target; 
        const valueToUse = type === "checkbox" ? checked : value; 
        change(name, valueToUse);
    };

    return (
        <form className='sign-up-form' onSubmit={onSubmit}>
            <h3>Sign up for an Account</h3>
            <div className='errors'>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
                <div>{errors.username}</div>
            </div>

            <div className='inputs'>
            <label>Username:
            <input
                name='username'
                type='text'
                placeholder='Choose a Username'
                maxLength="30"
                value={values.username}
                onChange={onChange}
            />
            </label>
                <br/>
                <label>Email:
                    <input
                        name='email'
                        type='text'
                        placeholder='Your eMail address'
                        maxLength="50"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <br/>
                <label>Password:
                    <input
                        name='password'
                        type='password'
                        placeholder='Choose a Password'
                        maxLength="30"
                        value={values.password}
                        onChange={onChange}
                    />
                </label>
                <br/>
                <label>Owner
                <input
                    type="radio"
                    name="role"
                    value="owner"
                    checked={values.role === "owner"}
                    onChange={onChange}
                />
                </label>
                    <br/>
                <label>Renter
                <input
                    type="radio"
                    name="role"
                    value="renter"
                    checked={values.role === "renter"}
                    onChange={onChange}
                />
                </label>
                <br/>
                <label>Terms and Conditions:
                    <input
                        type='checkbox'
                        name='terms'
                        checked={values.terms}
                        onChange={onChange}
                    />
                </label>
            </div>
            <button disabled={disabled}>Submit</button>
        </form>
    )
}
