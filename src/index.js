import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './Root'

import './index.css'
import AccountContextProvider from './context/AccountContext'
import PhoneContextProvider from './context/PhoneContext'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <PhoneContextProvider>
                <AccountContextProvider>
                    <Root />
                </AccountContextProvider>
            </PhoneContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
