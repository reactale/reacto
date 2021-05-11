import React from 'react'
import { Header, Footer } from '../index'

const styles = {
    minHeight: 'calc(100vh - 75px)',
    marginTop: 60
}

const Layout = props => {
    const { children, title } = props

    return (
        <div>
            <Header title={title} />
            <div style={styles}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout