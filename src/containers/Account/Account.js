import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { connect } from 'react-redux';
import * as yup from 'yup';

import * as actions from '../../store/actions/index';

import Button from '../../components/UI/BaseButton/BaseButton';
import Input from '../../components/UI/BaseInput/BaseInput';
import classes from './Account.module.css';
import ModalPassword from './ModalPassword/ModalPassword';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
});

const Account = (props) => {
  const [modalStatus, setModalStatus] = useState(false);

  const { register, handleSubmit, setValue, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const { username, email } = props;

  useEffect(() => {
    setValue('name', username);
    setValue('email', email);
  }, [username, email, setValue]);

  const submitHandler = (data) => {
    props.onUpdate(data.name);
  };

  return (
    <div>
      <form noValidate autoComplete="off" className={classes.Form} onSubmit={handleSubmit(submitHandler)}>
        <h1>Account</h1>
        <Input name="name" label="name" fullWidth inputRef={register} errors={errors} />
        <Input name="email" label="email" disabled fullWidth inputRef={register} errors="" />
        <Button fullWidth color="blank" classes={classes.Button} clicked={() => setModalStatus(true)}>
          Change Password
        </Button>
        <Button type="submit" classes={classes.Button}>
          Update
        </Button>
      </form>
      <ModalPassword isOpen={modalStatus} onClose={() => setModalStatus(false)} />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
