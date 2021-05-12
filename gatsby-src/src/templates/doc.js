import * as React from "react"
import { Container, Box } from '@material-ui/core'
import { graphql } from "gatsby"
import { Layout, ContextMenu } from '../components/common'
// import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

// import Bio from "../components/bio"
// import Seo from "../components/seo"

const DocTemplate = props => {
    const { data, pageContext } = props
    const mdx = data.mdx
    const docMenu = pageContext.docMenu
    // const siteTitle = data.site.siteMetadata?.title || `Title`
    // const { previous, next } = data


    return (
        <Layout title="CheatSheet">
            <ContextMenu menu={docMenu}></ContextMenu>
            <Container maxWidth="md">
                <Box
                    mb={8}
                    className="markdown-body ulist"
                    // dangerouslySetInnerHTML={{ __html: post.html }}
                >
                  <MDXRenderer>{mdx.body}</MDXRenderer>
                </Box>
            </Container>
        </Layout>

    )
}

export default DocTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        slug
      }
    }
  }
`

// export const pageQuery = graphql`
//   query BlogPostBySlug(
//     $id: String!
//   ) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     mdx(id: { eq: $id }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         description
//       }
//     }
//     allMdx(filter: {fileAbsolutePath: {regex: "/docs/"}}) {
//       edges {
//         node {
//           frontmatter {
//             title
//             path
//           }
//         }
//       }
//     }
//   }
// `
