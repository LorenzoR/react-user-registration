import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Button,
  Form,
  Icon,
} from 'semantic-ui-react';

const PASSWORD_MIN_CHARACTERS = 8;

const PasswordForm = () => {
  // Password and repeat password
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  // Error messages
  const [passwordRepeatErrorMsg, setPasswordRepeatErrorMsg] = useState<{ content: string, pointing: string } | null>(null);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<{ content: string, pointing: string } | null>(null);

  const dispatch = useDispatch();

  const submit = () => {
    if (!passwordIsValid()) {
      setPasswordErrorMsg({
        content: 'Password must be 8 characters long, contain upper and lower case letters and at least one number and one special character',
        pointing: 'below',
      });
    } else if (!passwordsMatch()) {
      setPasswordRepeatErrorMsg({
        content: 'Both passwords have to match',
        pointing: 'below',
      });
    } else {
      // Password OK
      dispatch({ type: 'SET_PASSWORD', payload: password });

      dispatch({ type: 'NEXT_STEP' });
    }
  }

  const prevStep = () => {
    dispatch({ type: 'PREV_STEP' });
  }

  const passwordIsValid = () => {
    if (!password || password.length < PASSWORD_MIN_CHARACTERS) {
      return false;
    }

    // No upper case
    if (!/[A-Z]/.test(password)) {
      return false;
    }

    // No lower case
    if (!/[a-z]/.test(password)) {
      return false;
    }

    // No numbers
    if (!/\d/.test(password)) {
      return false;
    }

    // No special characters
    if (!/\W/.test(password)) {
      return false;
    }

    // Valid
    return true;
  }

  const passwordsMatch = () => {
    return password === passwordRepeat;
  }

  return (
    <Form>
      <Form.Input
        id='input-password'
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        label='Password'
        type='password'
        placeholder='Password'
        error={passwordErrorMsg}
      />
      <Form.Input
        id='input-password-repeat'
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordRepeat(e.target.value)}
        label='Repeat Password'
        type='password'
        placeholder='Repeat Password'
        error={passwordRepeatErrorMsg}
      />
      <Button icon labelPosition='left' onClick={prevStep}>
        Back
        <Icon name='arrow left' />
      </Button>
      <Button id='btn-step-2-submit' primary icon labelPosition='right' onClick={submit}>
        Submit
        <Icon name='arrow right' />
      </Button>
    </Form>
  )
};

export default PasswordForm;