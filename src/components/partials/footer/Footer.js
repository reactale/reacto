import React from 'react'

const styles = {
    background: '#f00',
    textAlign: 'center',
    padding: '9px',
    fontWeight: 'bold',
    marginTop: '15px'
}

const Footer = () => (
    <div className="container-fluid site-footer" style={styles}>
        <footer>
            &copy; Reactale | 2019-{(new Date().getFullYear())}
        </footer>
    </div>
)

export default Footer