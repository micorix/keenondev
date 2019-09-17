import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import theme from '../theme';
const PostOverview = styled.div`
    padding: 1em 1em 1em 0;
    border-bottom:3px dashed ${theme.colors.primary};
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-column-gap: 1em;
    h3{
        font-family: ${theme.fonts.primary};
        letter-spacing: .1em;
        a{
            all:unset;
            cursor:pointer;
        }
        margin-bottom:.25em;
    }
    small{
        display: block;
        margin-bottom:.5em;
    }
    p{
        margin-bottom:0;
    }
    &:hover{
        border-bottom-style:solid;
    }
    img{
        border-radius:5px;
    }
`
export default (props) => {
    const { post } = props
    console.log(post)
    return (
        <PostOverview>
            <Link to={post.fields.slug}>
            <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
            </Link>
          <div>
          <h3>
          <Link to={post.fields.slug}>
                        {post.frontmatter.title || post.fields.slug}
                        </Link>
                    </h3>
                    
                    <small>{post.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                    /> 
          </div>
        </PostOverview>
    )
}