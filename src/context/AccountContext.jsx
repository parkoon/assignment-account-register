import React, { createContext } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRef } from 'react'

export const AccountContext = createContext({})

const { Provider } = AccountContext
function AccountContextProvider({ children }) {
    const [account, setAccount] = useState('')
    const [banks, setBanks] = useState([])
    const timer = useRef(null)

    useEffect(() => {
        clearTimeout(timer.current)
        timer.current = setTimeout(async () => {
            setBanks(await fetchBanks(account))
        }, 700)
    }, [account])

    const fetchBanks = async (account) => {
        if (!account) return
        try {
            const { data } = await axios.get(
                `https://fe-account-api.herokuapp.com/api/v1/account?no=${account}`
            )
            const { banks } = data
            return banks
        } catch (err) {
            console.error(err)
        }
    }
    return <Provider value={{ account, setAccount, banks }}>{children}</Provider>
}

export default AccountContextProvider
