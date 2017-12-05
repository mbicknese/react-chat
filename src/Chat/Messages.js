import Moment from 'moment'
import generateId from '@/UID'

export const createMessage = (message, owner = 1) => ({
  id: generateId(),
  owner,
  message,
  timestamp: (new Moment()).format()
})
