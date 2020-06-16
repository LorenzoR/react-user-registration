import React from 'react';
import { useSelector } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

import {
  Container,
  Header,
  Segment,
} from 'semantic-ui-react';

import EmailAndNameForm from './components/UserRegistrationForm/EmailAndNameForm';
import PasswordForm from './components/UserRegistrationForm/PasswordForm';
import FinalStep from './components/UserRegistrationForm/FinalStep';

const style = {
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  }
};

function App() {
  let step;

  const firstStep = <EmailAndNameForm />;
  const secondStep = <PasswordForm />;
  const finalStep = <FinalStep />

  switch (useSelector((state: any) => state.formSteps.step)) {
    case 1:
      step = firstStep;
      break;
    case 2:
      step = secondStep;
      break;
    case 3:
      step = finalStep;
      break;
    default:
      step = firstStep;
      break;
  }

  return (
    <div>
      <Header as='h3' textAlign='center' style={style.h3} content='User Registration' />
        <Container>
          <Segment.Group>
            <Segment>
            {step}
            </Segment>
          </Segment.Group>
        </Container>
      </div>
  )
}

export default App;
