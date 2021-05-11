import * as React from "react"
import { Container, Box } from '@material-ui/core'
import { graphql } from "gatsby"
import { Layout, ContextMenu } from '../components/common'

// import Bio from "../components/bio"
// import Seo from "../components/seo"

const DocTemplate = ({ data, location }) => {
    const post = data.markdownRemark
    const docMenu = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter)
    // const siteTitle = data.site.siteMetadata?.title || `Title`
    // const { previous, next } = data


    return (
        <Layout title="CheatSheet">
            <ContextMenu menu={docMenu} menuRoot="/docs" title="Documents"></ContextMenu>
            <Container maxWidth="md">
                <Box
                    mb={8}
                    className="markdown-body ulist"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                ></Box>
            </Container>
        </Layout>

    )
}

export default DocTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/docs/"}}) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
