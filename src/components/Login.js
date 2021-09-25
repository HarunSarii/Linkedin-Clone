import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <Nav>

                <a href="">
                    <img src="/images/login-logo.svg" alt="login" />
                </a>
                <div>
                    <Join>Join Now</Join>
                    <SignIn>Sign In</SignIn>
                </div>
            </Nav>
            <Section>Section</Section>
        </Container>
    )
}

const Container = styled.div`
    padding: 0px;
`

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display:flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
    `

const Join = styled.a`
        font-size: 16px;
        padding: 10px 12px;
        text-decoration: none;
        border-radius: 4px;
        color: rgb(0,0,0, 0.6);
        margin-right: 12px;
        &:hover {
            background-color: rgba(0,0,0,0.08);
            color: rgba(0,0,0,0.9);
            text-decoration :none ;
        }
    `

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0,0,0,0);
    &:hover {
        background-color: rgba(112,181,249,0.15);
        color: #0a66c2;
        text-decoration: none;
    }
    `

const Section = styled.section`
        display: flex;
        align-content: start;
        min-height: 700px;
        padding:60px 0 130px;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1128px;
        align-items: center;
        margin: auto;
        @media (max-width: 768px) {
            margin: auto;
            min-height: 0px;
        }

    `

export default Login
