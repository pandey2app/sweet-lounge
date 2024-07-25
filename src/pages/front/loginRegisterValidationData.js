import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Invalid email format').required('Please enter your email'),
    phone: Yup.string().required('Please enter your phone number')
        .matches(/^[0-9]{10}$/, "Mobile number should have ten digits"),
    password: Yup.string()
        .required('Please enter your password')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[@#-_$&]/, 'Password must contain at least one special character _-@#$&'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password'),
});

export const registerInitialState = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
};

export const loginValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Please enter your email'),
    password: Yup.string().required('Please enter your password'),
});

export const loginInitialState = {
    email: '',
    password: '',
};
