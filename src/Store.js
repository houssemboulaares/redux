import {createStore} from'redux'
import CountReducers from './Reducers.js/CountReducers'

export default createStore(CountReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())