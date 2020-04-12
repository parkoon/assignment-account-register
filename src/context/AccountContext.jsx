import React, { createContext } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const AccountContext = createContext({})

const { Provider, Consumer } = AccountContext

function AccountContextProvider({ children }) {
    const [account, setAccount] = useState('')
    const [banks, setBanks] = useState([])

    useEffect(() => {
        if (account.length > 12) {
            alert('api 호출')
        }
    }, [account])
    return <Provider value={{ account, setAccount }}>{children}</Provider>
}

export default AccountContextProvider
