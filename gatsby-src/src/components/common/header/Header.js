import React from 'react'
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        background: "var(--theme-color)",
        padding: '',
        display: 'flex',
        alignItems: 'center',
        height: 45,
        '& .logolink': {
            textDecoration: 'none',
            color: '#fff',
            marginLeft: 15,
            '& .reacto-logo': {
                color: '#fff',
                borderColor: '#fff'
            }
        },
        '& .title': {
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            flex: 1,
            fontSize: 27
        },
        '& .menuBtn': {
            color: '#fff',
            padding: '7px 15px',
            cursor: 'default',
            fontSize: 27,
            '&:hover': {
                color: 'rgba(255, 255, 255, .8)'
            },
            '&:active': {
                transform: 'scale(.9)'
            }
        }
    }
})
const Header = props => {
    const classes = useStyles()
    const { title } = props
    return (
        <header>
            <div className={classes.root}>
                <Link to="/" className="logolink">
                    <span className="reacto-logo">r</span>
                </Link>
                <span className="title">
                    {title || 'Reacto'}
                </span>
                <i class="fas fa-bars menuBtn"></i>
            </div>
        </header>
    )
}

export default Header