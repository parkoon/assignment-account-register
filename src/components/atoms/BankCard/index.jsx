import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading'
const BankCardWrapper = styled.div`
    width: 32.3333%;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid grey;
    margin-right: 1px;
    margin-bottom: 1px;
    padding-top: 12px;

    cursor: pointer;

    transition: 0.3s;

    &:hover {
        background: rgba(0, 0, 0, 0.2);
    }
`

const BankImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

function BankCard() {
    return (
        <BankCardWrapper>
            <BankImage src="https://i.picsum.photos/id/817/200/300.jpg" />
            <Heading level={4}>Hello</Heading>
        </BankCardWrapper>
    )
}

export default BankCard
