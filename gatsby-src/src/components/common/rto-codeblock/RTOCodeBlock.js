import React from 'react'
// import clsx from 'clsx'
import { Box } from '@material-ui/core'
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
        <Box lang="rto" mb={6}>
            <RTxtEditor
                btnFn={goToPlayground}
                btnTxt="Playground"
            >
                { children }
            </RTxtEditor>
        </Box>
    )
}

export default RTOCodeBlock