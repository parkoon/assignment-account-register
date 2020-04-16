import React, { useEffect, useContext, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { PhoneContext } from '../../context/PhoneContext'
import styled from 'styled-components'

import Header from '../atoms/Header'
import DigitField from '../molecules/DigitField'
import GuideMessage from '../atoms/GuideMessage'
import Button from '../atoms/Button'
import { LoadingContext } from '../../context/LoadingContext'
import Modal from '../atoms/Modal'
import useModal from '../../hooks/useModal'

const StyledPhoneConfirmPage = styled.div`
    width: 520px;
`
const StyledButtonWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: inherit;
`
function PhoneConfirmPage() {
    const { verification, checkAuthentication } = useContext(PhoneContext)
    const { loading } = useContext(LoadingContext)
    const { toggle, visible } = useModal()

    const history = useHistory()

    const retryCount = useRef(0)

    useEffect(() => {
        if (!verification) return history.push('/')
    }, [history, verification])

    const handleClick = async () => {
        const isAuthenticated = await checkAuthentication()

        if (isAuthenticated) {
            alert('등록 되었습니다. 초기 화면으로 이동합니다.')
            history.push('/')
        }

        if (!isAuthenticated) {
            retryCount.current += 1
            toggle()
        }

        // TODO 인증 완료되었을 때!
        if (retryCount.current === 3) {
            alert('인증 처리에 문제가 있습니다. 계좌번호부터 다시 입력해주세요.')
            history.push('/')
        }
    }

    const handleRetry = () => {
        toggle()
        handleClick()
    }

    return (
        <StyledPhoneConfirmPage>
            <Header title="전화인증" backLink="/" />
            <DigitField digits={verification} />
            <GuideMessage>
                Minim commodo ea elit fugiat voluptate exercitation elit do commodo commodo dolore.
                Ad voluptate minim cillum anim mollit ad ad nisi ullamco cupidatat id cupidatat
                nostrud. Magna voluptate qui sit voluptate ad officia sint dolor eu incididunt amet.
                Voluptate quis consectetur quis ut pariatur Lorem cillum ad commodo proident qui
                excepteur laborum dolore. Voluptate irure aliqua irure laboris adipisicing
                reprehenderit culpa consectetur eiusmod. Aliquip do minim sunt enim.
            </GuideMessage>

            <StyledButtonWrapper>
                <Button onClick={handleClick} block loading={loading}>
                    인증번호받기
                </Button>
            </StyledButtonWrapper>

            <Modal visible={visible} retry={handleRetry} />
        </StyledPhoneConfirmPage>
    )
}

export default PhoneConfirmPage
