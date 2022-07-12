// import {memo} from 'react'
import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('Me dibuje')

    return (
        <small>{value}</small>
    )
})
