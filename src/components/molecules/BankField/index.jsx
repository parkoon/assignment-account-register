import React from 'react'
import styled from 'styled-components'
import BankCard from '../../atoms/BankCard'
import Heading from '../../atoms/Heading'

const StyledBankField = styled.div`
    width: 300px;
    margin: 0 auto;
    margin-top: 52px;
`

function BankField() {
    return (
        <StyledBankField>
            <Heading level={3}>은행선택</Heading>
            <BankCard />
            <BankCard />
            <BankCard />
            <BankCard />
            <BankCard />
            <BankCard />
            <BankCard />
            <BankCard />
            <BankCard />
        </StyledBankField>
    )
}

export default BankField
