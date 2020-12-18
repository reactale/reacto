import React from 'react'
import { Layout } from '../components/common'
import { Box } from '@material-ui/core'

export default () => {
    return(
        <Layout>
            <Box p={3}>
                <h1>
                    Sorry, we could not find the page :(
                </h1>
            </Box>
        </Layout>
    )
}