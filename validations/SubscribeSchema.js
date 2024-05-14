import * as yup from 'yup';

export const SubscribeSchema = () =>
  yup.object().shape({
    email: yup.string().required('Email is required').email('Invalid Email')
  });
