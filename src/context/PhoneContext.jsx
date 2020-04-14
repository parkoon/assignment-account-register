import React, { createContext, useContext } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { LoadingContext } from './LoadingContext'

export const PhoneContext = createContext({})

const { Provider } = PhoneContext

function PhoneContextProvider({ children }) {
    const { setLoading } = useContext(LoadingContext)
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

    const checkAuthentication = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(
                `https://fe-account-api.herokuapp.com/api/v1/verification?code=${verification}`
            )

            const { success } = data
            setLoading(false)
            return success
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Provider value={{ getConfirmNumber, checkAuthentication, verification }}>
            {children}
        </Provider>
    )
}

export default PhoneContextProvider
