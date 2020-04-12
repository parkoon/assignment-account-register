import React from 'react'
import styled from 'styled-components'
import Header from '../atoms/Header'
import AccountInputField from '../molecules/AccountInputField'
import BankField from '../molecules/BankField'

const StyledAccountFormPage = styled.div``

function AccountFormPage() {
    return (
        <StyledAccountFormPage>
            <Header title="계좌 입력" />
            <AccountInputField />
            <BankField />
        </StyledAccountFormPage>
    )
}

export default AccountFormPage
