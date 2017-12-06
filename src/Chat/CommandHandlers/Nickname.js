import { socket } from '@/Chat'

export const canHandle = cmd => cmd.command === '/nick' && cmd.argument.length > 0

export const handle = cmd => {
  const payload = { author: cmd.author, nick: cmd.argument }
  socket.emit('nickChanged', payload)
}
