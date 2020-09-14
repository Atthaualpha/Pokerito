import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import Button from '../../components/UI/BaseButton/BaseButton';
import Input from '../../components/UI/BaseInput/BaseInput';

import classes from './Account.module.css';
const Account = (props) => {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue('name', props.username);
  });

  const submitHandler = () => {};

  return (
    <div>
      <form noValidate autoComplete="off" className={classes.Form} onSubmit={handleSubmit(submitHandler)}>
        <h1>Account</h1>
        <Input name="name" label="name" fullWidth inputRef={register} errors={{}} />
        <Input name="email" label="email" disabled fullWidth inputRef={register} errors="" />
        <Button fullWidth color="blank" classes={classes.Button}>
          Change Password
        </Button>
        <Button classes={classes.Button}>Update</Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
