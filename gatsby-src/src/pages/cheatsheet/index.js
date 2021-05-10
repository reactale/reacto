import React from 'react'
import { Layout } from '../../components/common'
import { graphql } from "gatsby"
import { Container, Box } from '@material-ui/core'

const Cheatsheet = props => {
    const { data } = props
    return (
        <Layout title="CheatSheet">
            <Container maxWidth="md">
                <Box
                    mb={8}
                    className="markdown-body ulist"
                    dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                ></Box>
            </Container>
        </Layout>
    )
}

export default Cheatsheet

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/pages/cheatsheet.md/" }) {
      html
    }
  }
`