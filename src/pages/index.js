import React from 'react'


import Layout from '../components/layout'
import Logo from '../images/logo-transparent.png'
import MicorixLogo from '../images/micorix-logo.png'
import styled from '@emotion/styled'
import theme from '../theme';
import { Link } from 'gatsby'
import PostOverview from '../components/PostOverview';
const primary = '#FF5757'
const SiteWrapper = styled('div')`
  width:50%;
  margin:0 auto;
  padding-top:5vh;
  height:100vh;
  font-family: 'Barlow';
  @media(max-width: 820px){
    width:calc(100% - 2em);
    padding-top: 0em;
}
 
`
const ListElement = styled.div`
`
const IndexPage = ({data}) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
  
  return (
  <Layout>
    <SiteWrapper>
    {posts.map(({ node }) => <PostOverview key={node.fields.slug} post={node} />)}
    </SiteWrapper>
  </Layout>
)
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image {
              childImageSharp {
                resize(width: 1500, height: 1500) {
                  src
                }
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
          }
       }
          }
        }
      }
    }
  }
`
