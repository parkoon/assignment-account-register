import React from 'react'
import styled from 'styled-components'
import Heading from '../../atoms/Heading'
import Input from '../../atoms/Input'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountContext'

const StyledAccountInputField = styled.div`
    margin-top: 72px;
    padding: 12px 72px;
`

function AccountInputField() {
    const { setAccount } = useContext(AccountContext)
    const handleChange = (value) => {
        setAccount(value)
    }
    return (
        <StyledAccountInputField>
            <Heading level={2}>등록 할 계좌를 입력해 주세요</Heading>
            <Input onChange={handleChange} />
        </StyledAccountInputField>
    )
}

export default AccountInputField
