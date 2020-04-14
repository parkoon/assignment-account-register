import React, { createContext, useState } from 'react'

export const LoadingContext = createContext()

const { Provider } = LoadingContext

function LoadingContextProvider({ children }) {
    const [loading, setLoading] = useState(false)
    return <Provider value={{ loading, setLoading }}>{children}</Provider>
}

export default LoadingContextProvider
