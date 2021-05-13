import React from 'react'
// import clsx from 'clsx'
// import { Button, makeStyles } from '@material-ui/core'
import { RTxtEditor } from '../'

// const useStyles = makeStyles({
    
// })

const RTOCodeBlock = props => {
    const { children } = props
    // const classes = useStyles()

    const goToPlayground = rTxt => {
        window.open(`/playground?rtxt=${encodeURIComponent(rTxt)}`)
    }

    return (
        <div lang="rto">
            <RTxtEditor
                btnFn={goToPlayground}
                btnTxt="Playground"
            >
                { children }
            </RTxtEditor>
        </div>
    )
}

export default RTOCodeBlock