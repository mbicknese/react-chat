import { socket } from '@/Chat'

export const canHandle = cmdText => cmdText === '/nick'

export const handle = cmd => {
  const payload = { author: cmd.author, nick: cmd.argument }
  socket.emit('nickChanged', payload)
}
