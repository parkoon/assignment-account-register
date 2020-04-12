import React from 'react'
import styled from 'styled-components'
import Header from '../atoms/Header'
import DigitField from '../molecules/DigitField'
import GuideMessage from '../atoms/GuideMessage'
import Button from '../atoms/Button'
const StyledPhoneConfirmPage = styled.div`
    width: 520px;
`
const StyledButtonWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: inherit;
`
function PhoneConfirmPage() {
    return (
        <StyledPhoneConfirmPage>
            <Header title="전화인증" backLink="/" />
            <DigitField />
            <GuideMessage>
                Minim commodo ea elit fugiat voluptate exercitation elit do commodo commodo dolore.
                Ad voluptate minim cillum anim mollit ad ad nisi ullamco cupidatat id cupidatat
                nostrud. Magna voluptate qui sit voluptate ad officia sint dolor eu incididunt amet.
                Voluptate quis consectetur quis ut pariatur Lorem cillum ad commodo proident qui
                excepteur laborum dolore. Voluptate irure aliqua irure laboris adipisicing
                reprehenderit culpa consectetur eiusmod. Aliquip do minim sunt enim.
            </GuideMessage>

            <StyledButtonWrapper>
                <Button block>인증번호받기</Button>
            </StyledButtonWrapper>
        </StyledPhoneConfirmPage>
    )
}

export default PhoneConfirmPage
