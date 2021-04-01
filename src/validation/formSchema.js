import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required!')
        .min(5, 'Username must be 5 characters or longer!'),
        // default username is 'admin'
    email: yup
        .string()
        .email('Email requires a valid @.com address!')
        .required('Email is required.'),
    password: yup
        .string()
        .required('Password is required!')
        .min(8, 'Password must be 8 characters or longer!'),
        //default password is 'password'
    role: yup
        .string()
        .required('Please Choose a Role!')
        .oneOf (["true","false"], "Please choose an option of Owner or Renter"),
    terms: yup
        .boolean()
        .required('Please agree to our legal terms and conditions')
});

export default formSchema;