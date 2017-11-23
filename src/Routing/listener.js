import { locationChange } from './actions'

export default function startListener (history, store) {
  init(history, store)
  listen(history, store)
}

const init = (history, store) => {
  store.dispatch(locationChange({
    pathname: history.location.pathname,
    search: history.location.search,
    hash: history.location.hash
  }))
}
const listen = (history, store) => {
  history.listen((location) => {
    store.dispatch(locationChange({
      pathname: location.pathname,
      search: location.search,
      hash: location.hash
    }))
  })
}
