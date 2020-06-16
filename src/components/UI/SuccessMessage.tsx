import React from 'react'
import { Message } from 'semantic-ui-react'

const SuccessMessage = ({ header, content }: { header: string; content: string }) => (
  <Message
    success
    header={header}
    content={content}
    icon='check circle outline'
  />
)

export default SuccessMessage;