import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore  as createStore} from 'redux'
import thunk from 'redux-thunk'
import App from './App.jsx'
import { pokemonsReducer } from './reducers/pokemons.js'
import './index.css'
import {  logger } from './middlewares/index.js'

const composeAlt =  window.__REDUX_DEVTOOLS_COMPOSE__ || compose;

const composedEnhancer = composeAlt(applyMiddleware(thunk,logger));

const store = createStore(
  pokemonsReducer,
  composedEnhancer
  
  );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />

    </Provider>
  </React.StrictMode>,
)
