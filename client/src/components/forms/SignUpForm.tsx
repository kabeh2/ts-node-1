import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from './MyTextInput';

// And now we can use these

const SignUpForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>

      <Formik
        initialValues={{
          username: '',

          email: '',

          password: '', // added for our select
        }}
        validationSchema={Yup.object({
          username: Yup.string()

            .max(25, 'Must be 25 characters or less.')

            .required('Required'),
          email: Yup.string()

            .email('Must be a valid email')

            .required('Required'),

          password: Yup.string()

            .max(15, 'Must be 15 characters or less.')

            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label='Username'
            name='username'
            type='text'
            placeholder='Username...'
          />
          <MyTextInput
            label='Email'
            name='email'
            type='text'
            placeholder='Email...'
          />

          <MyTextInput
            label='Password'
            name='password'
            type='password'
            placeholder='Password...'
          />

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpForm;
