import React, { createContext } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const PhoneContext = createContext({})

const { Provider } = PhoneContext

function PhoneContextProvider({ children }) {
    const [verification, setVerification] = useState()

    const getConfirmNumber = async (info) => {
        const { data } = await axios.post(
            'https://fe-account-api.herokuapp.com/api/v1/account',
            info
        )
        const { success, verification } = data
        if (success) {
            setVerification(verification)
            return true
        } else {
            alert('무슨문제야!!')
        }
    }

    return <Provider value={{ getConfirmNumber, verification }}>{children}</Provider>
}

export default PhoneContextProvider
