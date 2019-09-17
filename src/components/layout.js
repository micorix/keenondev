import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Sidebar from './Sidebar';
import styled from '@emotion/styled';
import theme from '../theme';
const SiteWrapper = styled.div`
  margin-left:20%;
  width:80%;
  height:100%;
  @media(max-width: 1420px){
    width:calc(100% - 25%);
}
@media(max-width: 1120px){
  margin-left: 30%;
  width:calc(100% - 30%);
}
@media(max-width: 820px){
  margin-left:0;
    width:100%;
}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'micorix blog' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Sidebar />
        
        <SiteWrapper>
        <div>
      {children}
      </div>
      </SiteWrapper>
    </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
