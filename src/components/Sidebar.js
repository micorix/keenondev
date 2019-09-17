import React, { useState, Component } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import micorixLogo from '../images/micorix-logo.png'
import logo from '../images/logo.png'
import theme from '../theme'
import { keyframes } from '@emotion/core';


const Sidebar = styled.aside`
    background: ${theme.colors.primary};
    height:100%;
    width:100%;
    box-sizing: border-box;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    box-shadow:-10px -10px 50px;
    position:fixed;
    top:0;
    left:0;
    width:20%;
    transition: .2s all;
    @media(max-width: 1420px){
        width:25%;
    }
    @media(max-width: 1120px){
        width:30%;
    }
    @media(max-width: 820px){
        left:${props => props.open ? '0' : '-100%'};
        width:100%;
        z-index:100;
    }
    

`
const MicorixLogo = styled.img`
    width:2em;
    height:2em;
    border-radius:5px;
    margin: 0;
`
const Logo = styled.img`
    height:25vh;
    display: block;
    margin:auto;
`
const Intro = styled.p`
    color:white;
    padding:2em;
    font-family:'Barlow';
    
`
const Author = styled.span`
    display: block;
    color:white;
    text-align: center;
    font-family:'Barlow';
    span{
       text-align: center;
       display: block;
    }
    a{
        all:unset;
        text-decoration: underline;
        cursor:pointer;
        
    }
`
const OutLink = styled.a`
all:unset;
font-family:'Barlow';
cursor: pointer;
    width:calc(100% - 4em);
    margin:2em;
    border-radius:3px;
    display: grid;
    text-align: center;
    div{
        color:black;
        height:100%;
        background: rgba(255,255,255,0.8);
        border-radius:3px;
    }
    span{
        padding: .5em 0 1em 0;
    }
   
    color:white;
    box-sizing: border-box;
 
`
const waveAnimation = keyframes`
    0%{
        box-shadow: none;
    }
    50%{
        box-shadow: 10px 10px 120px 0px rgba(0,0,0,0.75);
    }
    100%{
        box-shadow: none;
    }
`

const SidebarSwitch = styled.div`
  position: fixed;
  bottom:1em;
  right:1em;
  z-index:110;
  padding:.5em;
  background: white;
  transition: .2s all;
  border-radius:5px;
  @media(min-width: 820px){
    display: none;
    }
  span {
      display: block;
    width: 35px;
    height: 5px;
    background-color: ${theme.colors.primary};
    margin: 6px 0;
    opacity: ${props => props.open ? '0' : '1' };
    transition: .2s all;
    &:first-of-type{
        opacity:1;
        transform: ${props => props.open ? 'rotate(-45deg) translate(-9px, 6px);' : 'none'};
    }
    &:last-of-type{
        opacity:1;
        transform: ${props => props.open ? 'rotate(45deg) translate(-8px, -8px)' : 'none'};
    }
  }

  
`

export default class extends Component{
    constructor(props){
        super(props)
        this.state = { open: false}
    }
    render = () => {
        return (
            <>
            <SidebarSwitch onClick={e => this.setState({open: !this.state.open})} open={this.state.open}>
                <span></span>
                <span></span>
                <span></span>
            </SidebarSwitch>
            <Sidebar open={this.state.open}>
                <Link to="/">
                    <Logo src={logo} />
                </Link>
                <Author>
                <MicorixLogo src={micorixLogo} />
                    <span>
                    <a href="https://micorix.com">micorix</a>&nbsp;personal blog
                    </span>
                </Author>
                <Intro>
                    I'm 16 yo tech enthusiast. Hope will become javascript ninja.
                    Passionate about all stuff related to Javascript, Node, React & static sites.
                </Intro>
                <OutLink href="https://micorix.com" target="_blank">
                <div>my website:</div>
                <span>micorix.com</span>
                </OutLink>
                <OutLink href="https://twitter.com/keenondev" target="_blank">
                <div>twitter:</div>
                <span>@keenondev</span>
                </OutLink>
                <OutLink href="https://github.com/micorix" target="_blank">
                <div>github:</div>
                <span>micorix</span>
                </OutLink>
            </Sidebar>
            </>
        )
    }
}
