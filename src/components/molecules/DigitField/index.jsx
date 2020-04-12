import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Digit from '../../atoms/Digit'

const StyledDigitField = styled.div`
    display: flex;
    width: 320px;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: 92px;
    margin-bottom: 72px;
`

function DigitField({ number }) {
    return (
        <StyledDigitField>
            <Digit>1</Digit>
            <Digit>2</Digit>
            <Digit>3</Digit>
            <Digit>4</Digit>
        </StyledDigitField>
    )
}

DigitField.propTypes = {
    number: PropTypes.number.isRequired,
}

export default DigitField
