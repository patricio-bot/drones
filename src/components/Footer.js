import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (
        <Wrapper>
            <div className="section-top">
                <div className="logo">
                    <h1>hello from footer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est laboriosam inventore enim!</p>
                </div>

                <div className="info-container">

                    <div className="services">
                        <h5>services</h5>
                        <ul>
                            <li>email marketing</li>
                            <li>campaigns</li>
                        </ul>
                    </div>
                    <div className="about">
                        <h5>about</h5>
                        <ul>
                            <li>our story</li>
                            <li>benefits</li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <h5>follow us</h5>
                        <div className='social-icons'>
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                        </div>
                    </div>


                </div>
            </div>

            <div className="copyright-container">

                <h5>Copyright &copy; {new Date().getFullYear()}. <span>Logoipsum.</span>
                </h5>
                <h5>All rights reserved.</h5>


            </div>

        </Wrapper>
    )
}
const Wrapper = styled.footer` 
display:flex;
flex-wrap:nowrap;
flex-direction:column;
font-family: 'DM Sans', sans-serif;
background:var(--clr-white);
height:30rem;
color:var(--clr-grey-01);
.section-top{
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:stretch;

}
.logo,.info-container{
    width:100%;
    padding:3rem 0;
}

.info-container{
    display:flex;
    justify-content:space-around;
    text-transform:capitalize;
    border-top:1px solid var(--clr-grey-06);
    h5{
        color:var(--clr-pink);
    }
}
.copyright-container{
    width:100%;
    border-top:1px solid var(--clr-grey-06);
    display:flex;
   flex-direction:column;
   align-items:center;
  justify-content:center;
  padding:2rem;
  color:var(--clr-grey-05);
h5{
    font-size:1.4rem;
}
}
.social-icons{
    display:flex;
    justify-content:space-between;
}
li, svg{
    font-size:1.4rem;
}
li{
    padding-bottom:1rem;
}
svg, ul{
    margin-top:1rem;
}
@media (min-width:600px){
 
    .logo,.info-container{
    width:50%;
    padding:5rem 1rem;
}
.copyright-container{
        flex-direction:row; 
        padding:4rem;  
}
span{
        margin:0 0.5rem;
    }
    .info-container{
        border-left:1px solid var(--clr-grey-06);
        border-top:initial;
    }
}
`
export default Footer