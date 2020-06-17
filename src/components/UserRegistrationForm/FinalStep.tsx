import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../actions/actions';

import LoadingMessage from '../UI/LoadingMessage';
import ErrorMessage from '../UI/ErrorMessage';
import SuccessMessage from '../UI/SuccessMessage';

const FinalStep = () => {
  // Redux hook
  const dispatch = useDispatch();
  // Get values using redux hook
  const user = useSelector((state: any) => state.registration.user);
  const registering = useSelector((state: any) => state.registration.registering);
  const error = useSelector((state: any) => state.registration.error);

  if (!registering && user) {
    dispatch(userActions.register(user));
    return <LoadingMessage />;
  }

  if (registering) {
    return <LoadingMessage />;
  } else {
    if (error) {
      const header = 'Error!';
      const content = error.length > 0 ? error : 'Please try again later.';
      return <ErrorMessage header={header} content={content} />;
    } else {
      const header = 'Registration Succesfull!';
      const content = 'Check your email for further instructions.';
      return <SuccessMessage header={header} content={content} />;
    }
  }
};

export default FinalStep;