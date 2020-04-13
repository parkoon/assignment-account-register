import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import BankCard from '../../atoms/BankCard'
import Heading from '../../atoms/Heading'
import { PhoneContext } from '../../../context/PhoneContext'
import { AccountContext } from '../../../context/AccountContext'

const StyledBankField = styled.div`
    width: 300px;
    margin: 0 auto;
    margin-top: 52px;
`

function BankField({ items = [] }) {
    const { getConfirmNumber, verification } = useContext(PhoneContext)
    const { account } = useContext(AccountContext)
    const history = useHistory()

    console.log('verification', verification)

    const handleClick = async (info) => {
        const loaded = await getConfirmNumber(Object.assign({ ...info }, { account }))
        if (loaded) {
            history.push('/confirm')
        }
    }
    return (
        <StyledBankField>
            <Heading level={3}>은행선택</Heading>
            {items.map(({ logo, name, code }, index) => (
                <BankCard
                    key={index}
                    img={logo}
                    title={name}
                    onClick={() => handleClick({ name, code })}
                />
            ))}
        </StyledBankField>
    )
}

export default BankField
