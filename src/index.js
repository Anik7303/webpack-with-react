import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './components/App'

const element = <App />

ReactDOM.render(element, document.getElementById('root'))

if (module.hot) module.hot.accept()
