import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SingelPost = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, image } = data.markdownRemark.frontmatter
  const img = getImage(image)

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div>
          <GatsbyImage image={img} alt={title} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const Head = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
  return <Seo title={title} />
}

export default SingelPost

export const query = graphql`
  query PostQuery($url: String) {
    markdownRemark(frontmatter: { url: { eq: $url } }) {
      html
      frontmatter {
        title
        url
        category
        image {
          childImageSharp {
            gatsbyImageData(width: 600)
          }
        }
      }
    }
  }
`
