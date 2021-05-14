import React from 'react'
import { Header, Footer } from '../index'
import Seo from '../seo/Seo'
const styles = {
    minHeight: 'calc(100vh - 75px)',
    marginTop: 60
}

const Layout = props => {
    const { children, header, title, description } = props

    return (
        <div>
            <Seo
                title={title}
                description={description}
            />
            <Header title={header || title} />
            <div style={styles}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout