import React, { useState } from 'react'
import { Link } from "gatsby"
import { makeStyles, Menu, MenuItem } from '@material-ui/core'

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
        '& .menubtn': {
            background: 'transparent',
            border: 'none',
            outline: 'none',
            '& .ico': {
                color: '#fff',
                padding: '7px 15px',
                cursor: 'default',
                fontSize: 27,
            }
        }
    }
})

const menu = [
    { title: "Home", link: "/" },
    { title: "Documentation", link: "/reactos" },
    { title: "CheatSheet", link: "/cheatsheet" },
    { title: "Playground", link: "/playground" }
]

const Header = props => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
    
    const { title } = props

    const openMenu = e => {
        setAnchorEl(e.currentTarget)
    }
    
    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <header>
            <div className={classes.root}>
                <Link to="/" className="logolink">
                    <span className="reacto-logo">r</span>
                </Link>
                <span className="title">
                    {title || 'Reacto'}
                </span>
                <button type="button" onClick={openMenu} className="menubtn">
                    <i class="fas fa-bars ico"></i>
                </button>
                
            </div>
            <nav>
                <Menu
                    id="main-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    >
                    {
                        menu.map(m => 
                            <MenuItem onClick={handleMenuClose}>
                                <Link to={m.link} className="undecorated">{m.title}</Link>
                            </MenuItem>
                        )
                    }
                </Menu>
            </nav>
        </header>
    )
}

export default Header