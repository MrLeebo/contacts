import React from 'react'
import ReactDOM from 'react-dom'
import Contacts from './Contacts'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Contacts />, document.getElementById('root'))
registerServiceWorker()
