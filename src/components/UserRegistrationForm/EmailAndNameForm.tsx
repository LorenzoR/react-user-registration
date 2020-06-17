import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Form,
  Icon,
  Input,
} from 'semantic-ui-react';

import * as ActionTypes from '../../actions/actions';

const EmailAndNameForm = () => {
  // Name and email
  // Check store for initial value or empty
  const [email, setEmail] = useState(useSelector((state: any) => state.registration.user.email) || '');
  const [name, setName] = useState(useSelector((state: any) => state.registration.user.name) || '');

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
      dispatch({ type: ActionTypes.NEXT_STEP });
      dispatch({ type: ActionTypes.SET_NAME, payload: name });
      dispatch({ type: ActionTypes.SET_EMAIL, payload: email });
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
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <Form>
      <Form.Field
        id='input-name'
        required
        control={Input}
        label='Name'
        placeholder='Name'
        error={nameErrorMsg}
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <Form.Field
        id='input-email'
        required
        control={Input}
        label='Email'
        placeholder='your@email.com'
        error={emailErrorMsg}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <Button id="btn-step-1-next" icon labelPosition='right' onClick={nextStep}>
        Next
        <Icon name='arrow right' />
      </Button>
    </Form>
  )
};

export default EmailAndNameForm;