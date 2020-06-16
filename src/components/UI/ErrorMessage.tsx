import React from 'react'
import { Message } from 'semantic-ui-react'

const ErrorMessage = ({ header, content }: { header: string; content: string }) => (
  <Message
    error
    header={header}
    content={content}
    icon='times circle outline'
  />
)

export default ErrorMessage;