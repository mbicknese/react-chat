import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { middleware as RouterMiddleware, startListener } from '@/Routing'
import reducers from './Ducks'
import { epics as chatEpics } from './Ducks/Chat'

const history = createBrowserHistory()
const routerMiddleware = RouterMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(routerMiddleware, ...chatEpics))
)

startListener(history, store)

export default store
