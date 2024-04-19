import React from 'react'
import ReactDOM from 'react-dom/client'

import reportWebVitals from './reportWebVitals'

import { App } from './features/App'

const root = ReactDOM.createRoot(document.getElementById('root'))

const VERSION_DESCRIPTION = 'v0.1.0'

root.render(
  <React.StrictMode>
    <App versionDescription={VERSION_DESCRIPTION} />
  </React.StrictMode>
)

reportWebVitals()
