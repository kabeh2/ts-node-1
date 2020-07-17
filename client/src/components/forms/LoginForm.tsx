import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from './MyTextInput';

// And now we can use these

const LoginForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>

      <Formik
        initialValues={{
          username: '',

          password: '', // added for our select
        }}
        validationSchema={Yup.object({
          username: Yup.string()

            .max(25, 'Must be 25 characters or less.')

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
        <Form className='container w-1/4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto'>
          <div className='mb-4'>
            <MyTextInput
              label='Username/Email'
              name='username'
              type='text'
              placeholder='Username or Email...'
            />
          </div>

          <div className='mb-4'>
            <MyTextInput
              label='Password'
              name='password'
              type='password'
              placeholder='Password...'
            />
          </div>

          <button
            type='submit'
            className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
