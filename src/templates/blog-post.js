import React from "react"
import { Link, graphql } from "gatsby"
import styled from '@emotion/styled'
import Layout from "../components/layout"
import theme from "../theme";
import Img from 'gatsby-image'
const PostWrapper = styled.div`
    width:50%;
    background: white;
    margin:auto;
    font-family: 'Barlow';
    padding-top:5vh;
    @media(max-width: 820px){
        width:calc(100% - 2em);
        padding-top: 0em;
    }
`
const Header = styled.header`
    width:80%;
    margin:auto;
    height: 40vh;
    background: url(${props => props.imgSrc});
    background-size: cover;
    background-position: center center;
    border-radius:10px;
    position: relative;
    
    .gatsby-image-wrapper {
        display: none;
        width:100%;
        max-height:25vh;
        border-radius:10px;
        
        @media(max-width: 820px){
            display: block;
        }
    }
    @media(max-width: 820px){
        background: none;
        height: auto;
        width:calc(100% - 2em);
    }
`
const HeaderInfo = styled.div`
    position: absolute;
    bottom:1em;
    left:1em;
    @media(max-width: 820px){
        margin-top: 1em;
        position: static;
    }
    h1{
        display: inline-block;
        padding:0.5em;
        background: ${theme.colors.primary};
        color:white;
        border-radius:5px;
        font-family: ${theme.fonts.primary};
        letter-spacing: .1em;
    }
    p{
        display: inline-block;
        padding:0.5em;
        background: white;
        color:black;
        border-radius:5px;
        font-family:'Barlow';
        margin-right:1em;
        @media(max-width: 820px){
            border:1px solid;
        }
    }
`
const GoBack = styled(Link)`
    all:unset;
    cursor:pointer;
    position: absolute;
    top:1em;
    left:1em;
    background: black;
    padding:.5em;
    color:white;
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Barlow;
    opacity: .7;
    &:hover{
        opacity:1;
    }
`
const SiteWrapper = styled.div`
    width:100%;
    height:100%;
    margin:0;
    padding: 5vh 0 0 0;
`
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log(post.frontmatter.image.childImageSharp.fluid)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        {/* <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        /> */}
        <SiteWrapper>
        <Header imgSrc={post.frontmatter.image.childImageSharp.fluid.src}>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
        <GoBack to="/">← Go to all posts</GoBack>
        <HeaderInfo>
        <div>
        <h1>{post.frontmatter.title}</h1>
        </div>
        <div>
        <p>
          {post.frontmatter.date}
        </p>
        <p>
          {post.frontmatter.description}
        </p>
        </div>
        </HeaderInfo>
        </Header>
        <PostWrapper>
        
        
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
         
        />
       

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        </PostWrapper>
        </SiteWrapper>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
       }
       }
      }
    }
  `