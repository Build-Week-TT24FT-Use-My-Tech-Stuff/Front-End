import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required.'),
        // default username is 'admin'
    password: yup
        .string()
        .required('Password is required')
        //default password is 'password'
});

export default loginSchema;