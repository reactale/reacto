import React from 'react'
import { Link } from "gatsby"

const ContextMenu = props => {
    const { menu, menuRoot } = props
    return (
        <ul>
            {
                menu.map(m => <li>
                    <Link to={`${menuRoot}/${m.path}`}>{m.title}</Link>
                </li>)
            }
        </ul>
    )
}

export default ContextMenu