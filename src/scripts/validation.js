export const validateEmail = (values) => {
    const errors = {};
    const err = 'A valid email address is required';

    if (!values.email) {
        errors.email = err;
    }
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    return errors;
};