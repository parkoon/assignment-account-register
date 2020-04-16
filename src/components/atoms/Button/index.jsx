import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const ButtonWrapper = styled.button`
    padding: 12px;
    border: 1px solid orange;
    color: orange;
    min-width: 70px;
    cursor: pointer;

    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }

    ${(props) =>
        props.loading &&
        css`
            background: grey;
            &:hover {
                background: grey;
            }
        `}

    ${(props) =>
        props.block &&
        css`
            width: 100%;
        `}
`

function Button({ children, ...props }) {
    const { loading } = props

    console.log('loading in button', loading)
    return (
        <ButtonWrapper {...props} disabled={loading}>
            {loading ? '잠시만 기다려주세요...' : children}
        </ButtonWrapper>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    block: PropTypes.bool,
    loading: PropTypes.bool,
}

Button.defaultProps = {
    block: false,
    loaindg: false,
}

export default Button
