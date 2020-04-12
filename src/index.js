import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './Root'

import './index.css'
import AccountContextProvider from './context/AccountContext'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AccountContextProvider>
                <Root />
            </AccountContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
