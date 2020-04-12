import React from 'react'
import styled, { css } from 'styled-components'

const headingLevel = ({ level }) => {
    switch (level) {
        case 1:
            return css`
                margin-top: 24px;
                margin-bottom: 32px;
                font-size: 24px;
                font-weight: bold;
            `
        case 2:
            return css`
                margin-top: 24px;
                margin-bottom: 32px;
                font-size: 22px;
                font-weight: bold;
            `
        case 3:
            return css`
                margin-top: 8px;
                margin-bottom: 12px;
                font-size: 18px;
                font-weight: bold;
            `
        case 4:
            return css`
                margin-top: 8px;
                margin-bottom: 12px;
                font-size: 16px;
                font-weight: normal;
            `
        default:
            return css`
                margin-top: 2px;
                margin-bottom: 4px;
                font-size: 14px;
                font-weight: normal;
            `
    }
}

const Heading = styled(({ level, children, ...props }) =>
    React.createElement(`h${level}`, props, children)
)`
    ${headingLevel}
`

export default Heading
