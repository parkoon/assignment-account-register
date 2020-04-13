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

function DigitField({ digits }) {
    const splitedDigits = String(digits).split('') || []
    return (
        <StyledDigitField>
            {splitedDigits.map((d, index) => (
                <Digit key={index}>{d}</Digit>
            ))}
        </StyledDigitField>
    )
}

DigitField.propTypes = {
    number: PropTypes.number.isRequired,
}

export default DigitField
