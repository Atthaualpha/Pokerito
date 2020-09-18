import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import * as actions from '../../../store/actions/index';

import Modal from '../../../components/UI/Modal/Modal';
import Input from '../../../components/UI/BaseInput/BaseInput';
import Button from '../../../components/UI/BaseButton/BaseButton';

import classes from './ModalPassword.module.css';

const schema = yup.object().shape({
  password: yup.string().required('Password is required').min(6, 'Min length for password is 6'),
  confirmation: yup
    .string()
    .equals([yup.ref('password')], 'Password must match')
    .required('Password confirmation is required'),
});
const ModalPassword = (props) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = (data) => {
    props.onChangePassword(data.password);
  };

  return (
    <Modal title="Change Password" modalSize="sm">
      <form className={classes.Form} noValidate autoComplete="off" onSubmit={handleSubmit(submitHandler)}>
        <Input
          name="password"
          type="password"
          label="Password"
          fullWidth
          errors={errors}
          inputRef={register}
        />
        <Input
          type="password"
          name="confirmation"
          label="Password Confirmation"
          fullWidth
          errors={errors}
          inputRef={register}
        />
        <Button type="submit">Change Password</Button>
      </form>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePassword: (password) => dispatch(actions.updatePassword(password)),
  };
};

export default connect(null, mapDispatchToProps)(ModalPassword);
