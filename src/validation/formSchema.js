import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup.string()
        .required('Username is required.')
        .min(5, 'Username must be 8 characters or longer.'),
        // default username is 'admin'
    email: yup.string()
        .email('Email address must be valid.')
        .required('Email is required.'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Password must be 8 characters or longer.'),
        //default password is 'password'
    terms: yup.boolean()
    .required('Please agree to our legal terms and conditions')
});

export default formSchema;