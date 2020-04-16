import React from 'react'
import styled from 'styled-components'
import Header from '../atoms/Header'
import AccountInputField from '../molecules/AccountInputField'
import BankField from '../molecules/BankField'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountContext'
import useModal from '../../hooks/useModal'
import Modal from '../atoms/Modal'

const StyledAccountFormPage = styled.div``

function AccountFormPage() {
    const { banks } = useContext(AccountContext)
    return (
        <StyledAccountFormPage>
            <Header title="계좌 입력" />
            <AccountInputField />
            <BankField items={banks} />
        </StyledAccountFormPage>
    )
}

export default AccountFormPage
