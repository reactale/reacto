import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        background: '#000',
        color: 'var(--theme-color)',
        display: 'inline-block',
        /* padding: 15px 0 5px; */
        position: 'fixed',
        top: 45,
        left: 0,
        bottom: 0,
        // height: 'calc(100vh - 45px)',
        // maxHeight: 'calc(100vh - 45px)',
        zIndex: 9,
        transition: 'all 300ms linear',
        '&.collapsed': {
            // transform: 'translateX(-187px)'
            transform: 'translateX(-177px)'
        },
        '& .inner-container': {
            height: '100%',
            overflow: 'auto'
        },
        '& .toggler': {
            position: 'absolute',
            top: 0,
            right: -26,
            padding: 7,
            // right: -38,
            // padding: '7px 7px 7px 17px',
            background: '#000',
            color: 'var(--theme-color)',
            outline: 'none',
            border: 'none'
        },
        '&.collapsed .toggler': {
            opacity: .3
        },
        '& .title': {
            padding: '0 10px',
            margin: 0,
            textAlign: 'center'
        },
        '& ul': {
            listStyle: 'none',
            padding: '5px 0',
            margin: 0,
            '& li + li': {
                borderTop: '1px solid var(--theme-color)'
            },
            '& li a': {
                display: 'block',
                padding: '10px 20px',
                textDecoration: 'none'
            }
        },
    }
})

const ContextMenu = props => {
    const { menu, title } = props
    const classes = useStyles()
    const [isVisible, setIsVisible] = useState(window.innerWidth > 1380 ? true : false)

    useEffect(() => {
        setIsVisible(window.innerWidth > 1380 ? true : false)
    }, 
    [])

    return (
        <div className={clsx("context-menu", classes.root, !isVisible && 'collapsed')}>
            <button type="button" className="toggler" onClick={() => setIsVisible(!isVisible)}>
                <i className="fas fa-bars"></i>
            </button>
            
            <div className="inner-container">
                { title && <h4 className="title">{title}</h4> }
                <ul>
                {
                    menu.map(m => <li key={m.title}>
                        <Link to={`/${m.slug}`}>{m.title}</Link>
                    </li>)
                }
                </ul>
            </div>
        </div>
    )
}

export default ContextMenu