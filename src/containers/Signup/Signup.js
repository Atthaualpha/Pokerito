import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
      <form noValidate autoComplete="off" className={classes.Form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          name="name"
          label="Name"
          fullWidth
          inputRef={register}
          errors={errors}
        ></Input>
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          label="Email"
          fullWidth
          type="email"
          inputRef={register}
          errors={errors}
        ></Input>
        <Input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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

export default Signup;
