import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Button from '../Button'

const StyledModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

const ModalContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 270px;
    height: 180px;
    background-color: #fff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
`

const StyledButtonWrapper = styled.div`
    margin-top: 24px;
`

function Modal({ visible, hide, retry }) {
    return (
        visible &&
        ReactDOM.createPortal(
            <StyledModalWrapper>
                <StyledOverlay>
                    <ModalContent>
                        <h1>요청에 문제가 있습니다.</h1>
                        <StyledButtonWrapper>
                            <Button onClick={retry} style={{ marginRight: '7px' }}>
                                다시 시도
                            </Button>
                        </StyledButtonWrapper>
                    </ModalContent>
                </StyledOverlay>
            </StyledModalWrapper>,
            document.getElementById('modal')
        )
    )
}

export default Modal
