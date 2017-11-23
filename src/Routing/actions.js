export const PUSH = 'ROUTER/PUSH'
export const REPLACE = 'ROUTER/REPLACE'
export const GO = 'ROUTER/GO'
export const GO_BACK = 'ROUTER/GO_BACK'
export const GO_FORWARD = 'ROUTER/GO_FORWARD'
export const LOCATION_CHANGE = 'ROUTER/LOCATION_CHANGE'

export const push = (href) => ({
  type: PUSH,
  payload: href
})
export const replace = (href) => ({
  type: REPLACE,
  payload: href
})
export const go = (index) => ({
  type: GO,
  payload: index
})
export const goBack = () => ({
  type: GO_BACK
})
export const goForward = () => ({
  type: GO_FORWARD
})
export const locationChange = ({ pathname, search, hash }) => ({
  type: LOCATION_CHANGE,
  payload: { pathname, search, hash }
})
