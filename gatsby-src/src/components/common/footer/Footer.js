import React from 'react'

const styles = {
    background: 'var(--theme-color)',
    padding: '7px 10px',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
}

const Footer = props => {
    return (
        <div style={styles}>
            <footer>
                &copy; Suman Barick | 2019-{(new Date()).getFullYear()}
            </footer>
        </div>
    )
}

export default Footer