import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from './MyTextInput';
import { User } from '../../store/actions/types/User.interface';
import { UserCredentials } from '../../store/actions/types/UserCredentials.interface';
import { AppState } from '../../store/reducers';
import { login } from '../../store/actions/actionCreators';
import { useHistory } from 'react-router-dom';

// And now we can use these

type Props = LinkDispatchProps & LinkStateProps;

const initialState: string = '';

const LoginForm = (props: Props) => {
  const [inputError, setInputError] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (props.errors) {
      setInputError(props.errors);
    }
    console.log(inputError);
  }, [props.errors]);

  console.log('Input Error2: ', inputError);

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
        onSubmit={async (
          values,
          { setSubmitting, setErrors, setStatus, resetForm }
        ) => {
          try {
            props.login(values);
            resetForm({});
            setStatus({ success: true });
            console.log('Errors: ', props.errors.length);
          } catch (error) {
            setStatus({ success: false });
            setSubmitting(false);
            setErrors({});
          }
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

          {inputError && <div className='error'>{inputError}</div>}

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
  login: (credentials: UserCredentials) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
  user: state.fetchReducer.user,
  errors: state.fetchReducer.errors,
});

const mapDispatchToProps = (dispatch: any): LinkDispatchProps => ({
  login: (credentials: any) => dispatch(login(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
