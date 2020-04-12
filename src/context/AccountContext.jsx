import React, { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const AccountContext = createContext({})

const { Provider, Consumer } = AccountContext

function AccountContextProvider({ children }) {
    const [account, setAccount] = useState('')
    const [banks, setBanks] = useState([])

    useEffect(() => {
        if (account > 12) {
            alert('api 호출')
        }
    }, [account])
    return <Provider value={{ account, setAccount }}>{children}</Provider>
}

export default AccountContextProvider
