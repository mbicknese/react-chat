import React from 'react'
import { Plain } from '@/Components/Templates'
import { Chat as ChatContainer, Input, Other } from '@/Containers'

const Chat = () => (
  <Plain>
    <h2 className='flex text-grey-dark text-base px-4'>Chatting with&nbsp;<Other /></h2>
    <ChatContainer />
    <div className='absolute pin-b w-full p-6'><Input /></div>
  </Plain>
)

export default Chat
