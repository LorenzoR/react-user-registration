import React from 'react';

import { Message, Icon } from 'semantic-ui-react'

const LoadingMessage = () => {
  return (
    <Message icon>
      <Icon name='circle notched' loading />
      <Message.Content>
        <Message.Header>Just one second</Message.Header>
        Loading...
      </Message.Content>
    </Message>
  );
};

export default LoadingMessage;