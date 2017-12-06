import { socket } from '@/Chat'

export const canHandle = cmd => cmd.command === '/oops'

export const handle = cmd => {
  const payload = { author: cmd.author }
  socket.emit('messageRemoved', payload)
}
