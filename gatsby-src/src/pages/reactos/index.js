import React from 'react'
import { Link } from "gatsby"
import { Layout } from '../../components/common'
import { Container, Box } from '@material-ui/core'

const Reactos = props => {
    return (
        <Layout title="Documentation">
            <Container maxWidth="md">
                <Box
                    mb={8}
                >
                    <h1>
                        Documentation under construction...
                        <br/><br/>
                        Till then, please use The <Link to="/cheatsheet">Cheatsheet</Link> and the examples at the <Link to="/playground">Playground</Link>
                    </h1>
                </Box>
            </Container>
        </Layout>
    )
}

export default Reactos