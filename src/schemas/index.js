import * as yup from 'yup';

export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Name must contain only letters')
    .min(2, 'Name must be at least 2 characters')
    .required('Please enter your name'),

  surname: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Surname must contain only letters')
    .min(2, 'Surname must be at least 2 characters')
    .required('Please enter your surname'),

  email: yup
    .string()
    .email('Invalid email format')
    .required('Please enter your email'),

  tell: yup
    .string()
    .matches(
      /^\+38 \(\d{3}\) \d{2}-\d{2}-\d{3}$/,
      'Invalid phone number format'
    )
    .required('Please enter your phone number'),

  settlement: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Settlement must contain only letters')
    .min(2, 'Settlement must be at least 2 characters')
    .required('Please enter your settlement'),

  company: yup.string().required(),

  department: yup
    .number()
    .integer('Department must be an integer')
    .min(1, 'Department must be greater than or equal to 1')
    .max(5000, 'Department must be less than or equal to 5000')
    .required('Please enter your department'),
});
