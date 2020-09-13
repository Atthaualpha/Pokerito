import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { connect, useStore } from 'react-redux';

import * as actions from '../../store/actions/index';

import Input from '../../components/UI/BaseInput/BaseInput';
import Button from '../../components/UI/BaseButton/BaseButton';

import classes from './Signup.module.css';

yup.setLocale({
  mixed: {
    required: ({ path }) => `${path} is required`,
  },
});
const schema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().trim().required().email('Email is invalid'),
  password: yup.string().trim().required().min(6, 'Min length for password is 6'),
});

const Signup = (props) => {  
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const store = useStore();
  
  useEffect(() => {    
    const unsubscribe = store.subscribe(() => {   
      const message = store.getState().global.alertMessage;
      if (message === 'EMAIL_EXISTS' && !errors.email) { 
        setError('email', { type: 'manual', message: 'Email already exists' });
      }else if(message === 'Signup successful'){
        props.history.push('/')
      }
    });
    return() => {
      unsubscribe();
    }
  });


  const onSubmitHandler = (data) => {
    const { name, email, password } = data;
    props.onSignup(name, email, password);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
      <form noValidate autoComplete="off" className={classes.Form} onSubmit={handleSubmit(onSubmitHandler)}>
        <Input name="name" label="Name" fullWidth inputRef={register} errors={errors}></Input>
        <Input name="email" label="Email" fullWidth type="email" inputRef={register} errors={errors}></Input>
        <Input
          name="password"
          label="password"
          fullWidth
          type="password"
          inputRef={register}
          errors={errors}
        ></Input>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignup: (name, email, password) => dispatch(actions.signupStart(name, email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
