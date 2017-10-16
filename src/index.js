import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const render = Component => {
  ReactDOM.render(
    <Component />
    , document.querySelector('.container')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default
    render(App)
  })
}
