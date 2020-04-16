import React, { useState } from 'react'

function useModal() {
    const [visible, setVisible] = useState(false)

    const toggle = () => setVisible(!visible)

    return {
        visible,
        toggle,
    }
}

export default useModal
