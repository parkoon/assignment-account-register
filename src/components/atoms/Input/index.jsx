import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const InputWrapper = styled.div`
    position: relative;
`

const StyledInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #16a085;
    padding: 7px;
    font-size: 17px;

    &::placeholder {
        opacity: 0;
    }
    &:not(:placeholder-shown) ~ span {
        font-weight: bold;
        top: -17px;
        left: 7px;
    }
    &:focus ~ span {
        font-weight: bold;
        top: -17px;
        left: 7px;
    }
`

const Placeholder = styled.span`
    position: absolute;
    top: 7px;
    left: 17px;
    transition: 0.3s;
    color: #16a085;
`

const Clear = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    position: absolute;
    right: 7px;
    top: 50%;
    border: none;
    background: #16a085;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    transform: translateY(-50%);
    transition: 0.3s;

    &:hover {
        background-color: #1abc9c;
    }
`

function Input({ onChange }) {
    const [value, setValue] = useState('')

    const handleChange = ({ target }) => {
        const { value } = target
        if (value.length > 12) return
        console.log('api')
        setValue(value)
    }
    const handleReset = () => {
        setValue('')
    }

    return (
        <InputWrapper>
            <StyledInput
                type="number"
                placeholder="placeholder"
                value={value}
                onChange={handleChange}
            />
            <Placeholder>계좌입력</Placeholder>
            {value.length >= 2 && <Clear onClick={handleReset}>X</Clear>}
        </InputWrapper>
    )
}

export default Input
