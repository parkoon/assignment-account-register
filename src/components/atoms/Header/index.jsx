import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
    color: #fff;
    background-color: #16a085;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px;
`

const HeaderNav = styled.div``

const HeaderActions = styled.div``

const HeaderTitle = styled.div``

function Header({ title, actions }) {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderNav>뒤로가기</HeaderNav>
                <HeaderTitle>{title}</HeaderTitle>
                <HeaderActions></HeaderActions>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default Header
