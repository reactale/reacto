import * as React from "react"
import { graphql } from "gatsby"
// import MasterLayout from '../layouts/masterlayout'

// import Bio from "../components/bio"
// import Seo from "../components/seo"

const DocTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const { previous, next } = data

  return (
      <div>
          {post.frontmatter.title}
      </div>
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
  }
`
