import React from 'react'

const Footer = () => (
    <div className="container-fluid site-footer">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-9 px-3">
                <p>
                    Reacto is a part of the bigger project "Reactale".
                </p>
                <p>
                    Reactale is what happens when literature embraces technology and comes to life. When a reader
                    reads a Reactale (a.k.a Reactive Tale), the Reactale also reads back its reader and then reacts
                    by magically altering itself depending on the reader's actions / decisions / sorroundings and
                    other learnings that are made available to it about its reader.
                </p>
                <p>
                    REACTALE marks the birth of a NEW ERA of story telling, in search of a new way, a very REACTIVE
                    one, where no longer will an immersive tale ONLY ENGAGE its readers, but it will INTERACT, and
                    most importantly, it will REACT...
                </p>
            </div>
            <div className="col-12 col-sm-12 col-md-3">
                <h4>Connect</h4>
                <ul className="social-connect">
                    <li>
                        <a href="https://www.facebook.com/reactale" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-square ico"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/ReactiveTales" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter-square ico"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:reactale@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-envelope ico"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/" onClick={ e => {e.preventDefault(); alert ('App coming soon ...')} }>
                            <i className="fab fa-android ico"></i>
                        </a>
                    </li>
                </ul>

                <h4 className="mt-3 mb-0">Links</h4>
                <ul className="important-links">
                    <li>
                        <a href="https://reactale.com/rtale/privacy-policy" target="_blank" rel="noopener noreferrer">
                            Privacy policy
                        </a>
                    </li>
                    <li>
                        <a href="https://reactale.com/rtale/privacy-policy" target="_blank" rel="noopener noreferrer">
                            Terms and conditions
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default Footer