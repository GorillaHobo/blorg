import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Article from "../components/Article.js"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"
import PostCard from "../components/PostCard"
import PostCardContent from "../components/PostCardContent"
import Seo from "../components/Seo"

const TagsTemplate = ({ data, pageContext }) => {
  const { edges } = data.allOrgContent
  return (
    <Layout>
      <Seo title={`:${pageContext.tag}:`} />
      <Header currentPage={"index"} />
      <Article>
        <PageTitle>Posts tagged :{pageContext.tag}:</PageTitle>
        <PostCard>
          {edges.map(({ node }) => (
            <PostCardContent node={node} key={node.id} />
          ))}
        </PostCard>
        <Footer />
      </Article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query tagQuery($tag: String!) {
    allOrgContent(
      filter: { metadata: { tags: { eq: $tag } } }
      sort: { fields: metadata___date, order: DESC }
    ) {
      edges {
        node {
          id
          timeToRead
          metadata {
            title
            description
            date(formatString: "DD MMMM YYYY")
            tags
            export_file_name
          }
        }
      }
    }
  }
`

export default TagsTemplate
