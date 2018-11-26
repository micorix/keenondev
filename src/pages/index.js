import React from 'react'


import Layout from '../components/layout'
import Logo from '../images/logo-transparent.png'
import MicorixLogo from '../images/micorix-logo.png'
import styled from 'react-emotion'
const primary = '#FF5757'
const SiteWrapper = styled('div')`
  width:100%;
  height:100vh;
  background: ${primary};
  font-family: 'Barlow';

  a{
    all: unset;
    cursor:pointer;
    margin: 20px 0 20px 0;
    color: white;
    text-decoration: underline;
    display:block;
    &:hover{
      color:black;
      font-size: 1.2em;
    }
  }
`
const Centered = styled('div')`
  width:100%;
  display: flex;
  justify-content:center;
`
const Container = styled('div')`
h1, h2, h3{
  font-family: Advent Pro;
}
  color:white;

  .contact{
    border-top: 5px dashed white;
    h3{
      margin: 20px 0 10px 0;
    }
  }
`
const ImageWrapper = styled('div')`
margin-top:10vh;
  & > span{
    display:flex;
    align-items:center;
    justify-content: flex-end;
    color:#ddd;

    img{
      width:50px;
      margin:0 0 0 10px;
    }
  }
`
const IndexPage = () => (
  <Layout>
    <SiteWrapper>
      <Centered>
        <ImageWrapper>
  <img src={Logo} />
    <span>
      <a href="http://micorix.me">by micorix</a><img src={MicorixLogo} className="small" />
    </span>
  </ImageWrapper>


    </Centered>
      <Centered>
    <Container>
      <h1>Hi people!</h1>
      <h2>Welcome to KeenOnDEV Blog</h2>
      <p>Here we're gonna build something great. Please visit us later.</p>

    <div className="contact">
      <h3>Get in touch!</h3>
      <a href="http://fb.com/Keen-on-DEV-2001499309944433">Facebook</a>
      <a href="mailto:blog@keenondev.com">blog@keenondev.com</a>
    </div>
    </Container>
</Centered>

    </SiteWrapper>
  </Layout>
)

export default IndexPage
