import React from 'react'
import { Header, Footer } from '../index'

const styles = {
    minHeight: 'calc(100vh - 80px)'
}

const Layout = props => {
    const { children } = props

    return (
        <div>
            <Header />
            <div style={styles}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout