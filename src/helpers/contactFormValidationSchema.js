import * as Yup from 'yup'

export const validationSchema = () =>
  Yup.object().shape({
    first: Yup.string().required('First name is required'),
    last: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    phone: Yup.string().required('Phone number is required'),
  })
