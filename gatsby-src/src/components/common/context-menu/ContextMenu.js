import React, { useState } from 'react'
import { Link } from "gatsby"

const ContextMenu = props => {
    const { menu, menuRoot, title } = props
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className="context-menu">
            {/* <h4 className="title">{title}</h4> */}
            <div className="toggler" onClick={() => setIsVisible(!isVisible)}>
                { isVisible && <i class="fas fa-angle-double-up ico up"></i> }
                { !isVisible && <i class="fas fa-angle-double-down ico down"></i> }
            </div>
            <ul>
            {
                menu.map(m => <li>
                    <Link to={`${menuRoot}/${m.path}`}>{m.title}</Link>
                </li>)
            }
            </ul>
        </div>
    )
}

export default ContextMenu