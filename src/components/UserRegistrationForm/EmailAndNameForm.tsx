import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Button,
  Form,
  Icon,
  Input,
} from 'semantic-ui-react';

const EmailAndNameForm = () => {
  // Name and email
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // Error msgs
  const [emailErrorMsg, setEmailErrorMsg] = useState<{ content: string, pointing: string } | null>(null);
  const [nameErrorMsg, setNameErrorMsg] = useState<{ content: string, pointing: string } | null>(null);

  // Redux hook
  const dispatch = useDispatch();

  const nextStep = () => {
    if (!isValidName(name)) {
      setNameErrorMsg({
        content: 'Please enter a valid name',
        pointing: 'below',
      });
    }
    if (isValidEmail(email)) {
      dispatch({ type: 'NEXT_STEP' });
      dispatch({ type: 'SET_NAME', payload: name });
      dispatch({ type: 'SET_EMAIL', payload: email });
    } else {
      setEmailErrorMsg({
        content: 'Please enter a valid email address',
        pointing: 'below',
      });
    }
  }

  const isValidName = (name: string): boolean => {
    return !!name && name.trim().length > 0;
  }

  const isValidEmail = (email: string): boolean => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <Form>
      <Form.Field
        required
        control={Input}
        label='Name'
        placeholder='Name'
        error={nameErrorMsg}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <Form.Field
        required
        control={Input}
        label='Email'
        placeholder='your@email.com'
        error={emailErrorMsg}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <Button icon labelPosition='right' onClick={nextStep}>
        Next
        <Icon name='arrow right' />
      </Button>
    </Form>
  )
};

export default EmailAndNameForm;