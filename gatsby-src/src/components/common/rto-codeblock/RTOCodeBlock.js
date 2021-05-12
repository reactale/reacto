import React from 'react'
import clsx from 'clsx'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        marginTop: 30,
        position: 'relative',
        background: '#000',
        color: '#fff',
        // paddingTop: 20,
        borderRadius: 4,
        '& .titlebar': {
            display: 'flex',
            borderRadius: 4,
            height: 32,
            alignItems: 'center',
            background: 'var(--theme-color)',
            '& .title': {
                margin: 0,
                fontSize: 18,
                paddingLeft: 15,
                flex: 1
            },
            '& .btn-gotoplayground': {
                background: 'transparent',
                padding: 0,
                height: '100%',
                boxShadow: 'none',
                '& .ico': {
                    fontSize: 22,
                    color: '#fff',
                }
            },
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
            <div className="titlebar">
                <h2 className="title">Reactive Text</h2>
                <Button 
                    variant="contained" 
                    onClick={e => goToPlayground(e)}
                    size="small"
                    className="btn-gotoplayground"
                    endIcon={<i className="fas fa-play-circle ico"></i>}
                >
                </Button>
            </div>
            
            <div className="inner">
                {children}
            </div>
        </div>
    )
}

export default RTOCodeBlock