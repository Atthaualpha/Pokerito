import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect, useStore } from 'react-redux';
import * as actions from '../../store/actions/index';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import Input from '../../components/UI/BaseInput/BaseInput';
import Button from '../../components/UI/BaseButton/BaseButton';

import classes from './Signin.module.css';

yup.setLocale({
  mixed: {
    required: ({ path }) => `${path} is required`,
  },
});
const schema = yup.object().shape({
  email: yup.string().trim().required().email('Email is invalid'),
  password: yup.string().trim().required(),
});

const Signin = (props) => {
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const store = useStore();

  useEffect(() => {
    const unsubcribe = store.subscribe(() => {
      const message = store.getState().global.alertMessage;
      if (message === 'INVALID_CREDENTIALS' && !errors.email) {
        setError('email', { type: 'manual', message: 'Invalid email or' });
        setError('password', { type: 'manual', message: 'Invalid password' });
      } else if (message === 'Signed in') {
        props.history.push('/');
      }
    });

    return () => {
      unsubcribe();
    };
  });

  const loginHandler = (data) => {
    props.onLogin(data.email, data.password);
  };

  return (
    <div>
      <form noValidate autoComplete="off" className={classes.Form} onSubmit={handleSubmit(loginHandler)}>
        <h1>Sign In</h1>
        <Input name="email" label="Email" fullWidth type="email" inputRef={register} errors={errors}></Input>
        <Input
          name="password"
          label="password"
          fullWidth
          type="password"
          inputRef={register}
          errors={errors}
        ></Input>
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(actions.loginStart(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Signin);
