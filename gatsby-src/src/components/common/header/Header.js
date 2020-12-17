import React from 'react'
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        background: "var(--theme-color)",
        padding: '7px 15px',
        '& .logolink': {
            textDecoration: 'none',
            color: '#fff',
            '& .reacto-logo': {
                color: '#fff',
                borderColor: '#fff'
            }
        }
    }
})
const Header = props => {
    const classes = useStyles()
    return (
        <header>
            <div className={classes.root}>
                <Link to="/" className="logolink">
                    <span className="reacto-logo">r</span>
                </Link>
            </div>
        </header>
    )
}

export default Header