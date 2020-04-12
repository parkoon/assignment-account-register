import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const ButtonWrapper = styled.button`
    padding: 12px;
    background: red;
    color: #fff;
    cursor: pointer;

    &:hover {
        background: blue;
    }

    ${(props) =>
        props.loading &&
        css`
            background: rgba(0, 0, 0, 0.3);
        `}

    ${(props) =>
        props.block &&
        css`
            width: 100%;
        `}
`

function Button({ children, ...props }) {
    const { loading } = props
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
