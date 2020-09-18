import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Button from '../../components/UI/BaseButton/BaseButton';
import Input from '../../components/UI/BaseInput/BaseInput';
import classes from './Account.module.css';
import ModalPassword from './ModalPassword/ModalPassword';
const Account = (props) => {
  const { register, handleSubmit, setValue, errors } = useForm();

  useEffect(() => {
    setValue('name', props.username);
    setValue('email', props.email);
  });

  const submitHandler = (data) => {
    props.onUpdate(data.name);
  };

  return (
    <div>
      <form noValidate autoComplete="off" className={classes.Form} onSubmit={handleSubmit(submitHandler)}>
        <h1>Account</h1>
        <Input name="name" label="name" fullWidth inputRef={register} errors={errors} />
        <Input name="email" label="email" disabled fullWidth inputRef={register} errors="" />
        <Button fullWidth color="blank" classes={classes.Button} clicked={() => props.onChangePassword()}>
          Change Password
        </Button>
        <Button type="submit" classes={classes.Button}>
          Update
        </Button>
      </form>
      <ModalPassword />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    email: state.auth.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (newUsername) => dispatch(actions.updateUserStart(newUsername)),
    onChangePassword: () => dispatch(actions.openModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
