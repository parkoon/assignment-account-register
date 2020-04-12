import React from 'react'
import styled from 'styled-components'

import { Switch, Route } from 'react-router-dom'
import AccountFormPage from './components/pages/AccountFormPage'
import PhoneConfirmPage from './components/pages/PhoneConfirmPage'

const RootWrapper = styled.div`
    min-width: 520px;
    width: 40%;
    margin: 0 auto;
    height: 100vh;
    background: #eeeeee;
`

function Root() {
    return (
        <RootWrapper>
            <Switch>
                <Route path="/" exact>
                    <AccountFormPage />
                </Route>
                <Route path="/confirm">
                    <PhoneConfirmPage />
                </Route>
            </Switch>
        </RootWrapper>
    )
}

export default Root
