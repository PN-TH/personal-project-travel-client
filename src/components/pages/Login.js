import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useToasts } from 'react-toast-notifications';
import queryString from 'query-string';
import API from '../../services/API';

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const { redirectPath } = queryString.parse(window.location.search);
  const history = useHistory();
  const { addToast } = useToasts();

  //   const onSubmit = async (data) => {
  //     try {
  //       await API.post('auth/login', data);
  //       history.push('/profile');
  //       addToast('Yeaaah', {
  //         appearance: 'success',
  //         autoDismiss: true,
  //       });
  //     } catch (err) {
  //       addToast('Identifiants non reconnus', {
  //         appearance: 'error',
  //         autoDismiss: true,
  //       });
  //     }
  //   };

  const onSubmit = (data) => {
    API.post('/auth/login', data)
      .then(() => {
        addToast('Yeaaah', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/profile');
      })
      .catch(() => {
        addToast('Identifiants non reconnus', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  };

  useEffect(() => {
    if (errors) {
      const arrayErrors = Object.values(errors);
      arrayErrors.map((error) =>
        addToast(error.message, {
          appearance: 'error',
          autoDismiss: true,
        })
      );
    }
  }, [errors]);

  return (
    <>
      <h1>Login Page</h1>
      {/* {redirectPath && (
        <p>
          You were redirected here because your session is not valid. Maybe it
          has expired since the last time you visited this page ? Please log in
          again using the form below
        </p>
      )} */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>
          {'Email : '}
          <input
            ref={register}
            name='email'
            id='email'
            type='email'
            autoComplete='username'
          />
        </label>
        <label htmlFor='password'>
          {'Password : '}
          <input
            ref={register}
            name='password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
        </label>
        <label htmlFor='stayConnected'>
          <input
            ref={register}
            name='stayConnected'
            id='stayConnected'
            type='checkbox'
          />
          Stay connected ?
        </label>
        <input type='submit' value='Log in' />
      </form>
    </>
  );
}
