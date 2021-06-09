import {createStore} from 'redux';
import reducer from './reducers';
const store=createStore(reducer, /* preloadedState, */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;   //store fct js with reducer param (hold the global defined state)


