import React from 'react'
import styled from 'styled-components'
import { useHistory, useLocation } from 'react-router-dom'
import { useCallback } from 'react'

const HeaderWrapper = styled.header`
    color: #fff;
    background-color: #16a085;
`

const HeaderContainer = styled.div`
    position: relative;
    padding: 18px 24px;
`

const HeaderNav = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    width: 35px;
    height: 35px;
    border-radius: 50%;
    transition: 0.3s;
    font-size: 24px;

    &:hover {
        background: rgba(0, 0, 0, 0.2);
    }
`

const HeaderTitle = styled.div`
    text-align: center;
`

//
function Header({ title, backLink, actions }) {
    const history = useHistory()
    const { pathname } = useLocation()

    const isRootDir = () => pathname === '/'
    const handleNav = () => history.goBack()

    return (
        <HeaderWrapper>
            <HeaderContainer>
                {!isRootDir() && <HeaderNav onClick={handleNav}>&larr;</HeaderNav>}
                <HeaderTitle>{title}</HeaderTitle>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default Header
