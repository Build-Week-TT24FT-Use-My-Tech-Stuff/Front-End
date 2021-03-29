import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string()
    .trim()
    .required('Name is required')
    .min(2, 'Must be at least 2 characters.'),
    username: yup.string()
        .trim()
        .required('Username is required.')
        .min(8, 'Username must be 8 characters or longer.'),
    email: yup.string()
        .email('Email address must be valid.')
        .required('Email is required.'),
    password: yup.string()
        .required('Password is required')
        .min(7, 'Password must be 7 characters or longer.'),
});
export default formSchema;
