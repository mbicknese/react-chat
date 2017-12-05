import React from 'react'
import { Plain } from '@/Components/Templates'
import { Chat as ChatContainer, Input } from '@/Containers'

const Chat = () => (
  <Plain>
    <ChatContainer />
    <div className='absolute pin-b w-full p-6'><Input /></div>
  </Plain>
)

export default Chat
