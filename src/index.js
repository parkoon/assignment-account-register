import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './Root'

import './index.css'
import AccountContextProvider from './context/AccountContext'
import PhoneContextProvider from './context/PhoneContext'
import LoadingContextProvider from './context/LoadingContext'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <LoadingContextProvider>
                <PhoneContextProvider>
                    <AccountContextProvider>
                        <Root />
                    </AccountContextProvider>
                </PhoneContextProvider>
            </LoadingContextProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
