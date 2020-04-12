import React from 'react'
import styled from 'styled-components'
import Header from './components/atoms/Header'
import Heading from './components/atoms/Heading'
import Input from './components/atoms/Input'
import BankCard from './components/atoms/BankCard'
import AccountFormPage from './components/pages/AccountFormPage'
import PhoneConfirmPage from './components/pages/PhoneConfirmPage'

const RootWrapper = styled.div`
    min-width: 520px;
    width: 40%;
    margin: 0 auto;
    height: 100vh;
    background: #eeeeee;
`

function Root() {
    return (
        <RootWrapper>
            {/* <AccountFormPage /> */}
            <PhoneConfirmPage />
        </RootWrapper>
    )
}

export default Root
