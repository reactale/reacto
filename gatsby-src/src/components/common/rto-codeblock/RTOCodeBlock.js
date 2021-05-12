import React from 'react'
import clsx from 'clsx'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        position: 'relative',
        background: '#000',
        color: '#fff',
        paddingTop: 20,
        borderRadius: 4,
        '& .btn-gotoplayground': {
            background: 'var(--theme-color)',
            color: '#fff',
            position: 'absolute',
            right: 0,
            top: 0
        },
        '& .inner': {
            width: '100%',
            overflow: 'auto',
            padding: '20px 20px 30px',
            '& code': {
                // paddingRight: 20
            }
        },
    }
})

const RTOCodeBlock = props => {
    const { children } = props
    const classes = useStyles()

    const goToPlayground = e => {
        const rTxt = e.target.closest('.rto-codeblock').querySelector('code').innerText
        window.open(`/playground?rtxt=${encodeURIComponent(rTxt)}`)
    }

    return (
        <div lang="rto" className={clsx("rto-codeblock", classes.root)}>
            <Button 
                variant="contained" 
                onClick={e => goToPlayground(e)}
                size="small"
                className="btn-gotoplayground"
                endIcon={<i className="fas fa-angle-double-right"></i>}
            >
                Playground
            </Button>
            <div className="inner">
                {children}
            </div>
        </div>
    )
}

export default RTOCodeBlock