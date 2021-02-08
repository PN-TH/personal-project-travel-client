import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CircularProgress } from '@material-ui/core';

export default function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios.post('http://localhost:5000/users', data);
  };

  return (
    <div className='App'>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name='email' ref={register} placeholder='Name' />

          <input name='password' ref={register} placeholder='Type' />
          <input
            name='password_confirmation'
            ref={register}
            placeholder='Type'
          />

          <input type='submit' />
        </form>
      </div>
    </div>
  );
}
