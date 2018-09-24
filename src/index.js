import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import "@babel/polyfill";
import "../public/css/index.less"

// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import App from './App.js'
import reducers from './redux/reducers'

///// with Redux
const store = createStore(
    reducers,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
)


///// no Redux
// ReactDOM.render(<App />, document.getElementById('root'))

module.hot.accept();
