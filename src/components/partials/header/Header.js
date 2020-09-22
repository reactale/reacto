import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import reactoLogo from '../../../assets/img/logo/Reacto-logo-40h.png'
// import reactaleLogo from '../../../assets/img/logo/Reactale-logo-minimum-32x.png'

const Header = () => {
    const [isMobileNavHidden, setIsMobileNavHidden] = useState(true);

    const closeNav = () => setIsMobileNavHidden(true)

    return (
        <nav className="navbar navbar-expand-lg shadow">
            <Link className="navbar-brand" to="/">
                {/* <img src={reactoLogo} alt="Reacto Logo" /> */}
                <span id='rtologo' className="reacto-logo">r</span>
                {isMobileNavHidden }
            </Link>


            <button className="navbar-toggler btn btn-outline-primary" type="button" aria-controls="navbarText"
            onClick={() => setIsMobileNavHidden(!isMobileNavHidden)}
                aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className={'navbar-collapse bx-navbar-body ' + (isMobileNavHidden ? 'mobile-nav-hidden' : '')}>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" onClick={closeNav}>
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item" onClick={closeNav}>
                        <Link className="nav-link" to="/reactos">List</Link>
                    </li>
                    <li className="nav-item" onClick={closeNav}>
                        <Link className="nav-link" to="/playground">Playground</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
