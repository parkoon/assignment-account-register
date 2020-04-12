import React from 'react'
import styled from 'styled-components'
import Heading from '../../atoms/Heading'
import Input from '../../atoms/Input'

const StyledAccountInputField = styled.div`
    margin-top: 72px;
    padding: 12px 72px;
`

function AccountInputField() {
    return (
        <StyledAccountInputField>
            <Heading level={2}>등록 할 계좌를 입력해 주세요</Heading>
            <Input />
        </StyledAccountInputField>
    )
}

export default AccountInputField
