import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/ddd.jpg'
const PageHero = ({ title }) => {
    return (
        <Wrapper>
            <h3>Drone {title}</h3>
            <Link to='/'>
                <img src={logo} alt="drone" />
            </Link>

        </Wrapper>
    )
}
const Wrapper = styled.nav`
background-color:var(--clr-white);
font-family: 'Poppins', sans-serif;
font-size:1.6rem;
padding:0.5rem 1rem;
width:100%;
height:6rem;
display:flex;
justify-content:space-between;
align-items:center;
img{
    display:block;
    height:50px;
}
`

export default PageHero