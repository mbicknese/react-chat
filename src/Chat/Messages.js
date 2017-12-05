import Moment from 'moment'
import generateId from '@/UID'

export const createMessage = (message, author = 1) => ({
  id: generateId(),
  author,
  message,
  timestamp: (new Moment()).format()
})
