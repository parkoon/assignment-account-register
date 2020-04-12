import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const PopupWrapper = styled.div``
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
`
const PopupContainer = styled.div``
const PopupMessage = styled.p``
function Popup() {
    return (
        <PopupWrapper>
            <Overlay />
            <PopupContainer>
                <PopupMessage></PopupMessage>
                <Button onClick={() => alert('zzz')} block>
                    다시시도
                </Button>
            </PopupContainer>
        </PopupWrapper>
    )
}

export default Popup
