import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from './MyTextInput';
import { AppState } from '../../store/reducers';
import { User } from '../../store/actions/types/User.interface';
import { NewUser } from '../../store/actions/types/NewUser.interface';
import { signup } from '../../store/actions/actionCreators';

type Props = LinkStateProps & LinkDispatchProps;

const SignUpForm = (props: Props) => {
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
        onSubmit={async (
          values,
          { setSubmitting, setErrors, resetForm, setStatus }
        ) => {
          try {
            props.signup(values);
            resetForm({});
            setSubmitting(true);
            setStatus({ success: true });
          } catch (error) {
            setSubmitting(false);
            setStatus({ success: false });
            setErrors({});
          }
        }}
      >
        <Form className='container w-1/4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto'>
          <div className='mb-4'>
            <MyTextInput
              label='Username'
              name='username'
              type='text'
              placeholder='Username...'
            />
          </div>
          <div className='mb-4'>
            <MyTextInput
              label='Email'
              name='email'
              type='text'
              placeholder='Email...'
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

interface LinkStateProps {
  user: User;
  errors: string;
}
interface LinkDispatchProps {
  signup: (credentials: NewUser) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  user: state.fetchReducer.user,
  errors: state.fetchReducer.errors,
});
const mapDispatchToProps = (dispatch: any): LinkDispatchProps => ({
  signup: (credentials: NewUser) => dispatch(signup(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
