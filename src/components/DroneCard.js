import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const DroneCard = ({ name, batery, age, image, id }) => {

    return (
        <Wrapper>
            <div className='card-container'  >
                <img src={image} alt={name} />
                <div className="drone-info">
                    <div className='align'> <p>name:</p> <span className='name'>{name}</span></div>
                    <div className="align">
                        <p>battery:  </p><span className='details'>{batery} mA</span>
                    </div>
                    <div className="align">
                        <p>age:  </p><span className='details'>{age} {age > 1 ? <span>Years</span> : <span>Year</span>}</span>
                    </div>
                    <Link to={`/${id}`} className='btn'>See Reports</Link>
                </div>

            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`

font-family: 'Poppins', sans-serif;
background-color:var(--clr-white);
border-radius:var(--big-radius);
height:auto;
padding-bottom:2rem ;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
box-shadow:var(--card-shadow);

img{
    width: 100%;
    display: block;
    border-top-left-radius:var(--big-radius) ;
    border-top-right-radius:var(--big-radius) ;
    object-fit:cover;
  }
  p{
      color:var(--clr-grey-04);
      font-weight:600;
      text-transform:uppercase;
  }
  .align{
    width:80%;
    margin:0 auto;
    padding:0 1rem;
    display:flex;
    justify-content:space-between;
  }

.name{
    color:var(--clr-primary);
    text-transform:uppercase;
    font-weight:700;
}
.drone-info{
    padding:1rem 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}
.details{
    color:black;
}
span{
    font-size:1.2rem;
}

`
export default DroneCard