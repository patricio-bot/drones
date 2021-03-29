import React from 'react'
import dronesList from '../utils/drones.json'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const DroneCard = () => {

    return (
        <Wrapper className='section-center'>
            {dronesList.drones.map((drone) => {
                const { name, batery, age, image, id } = drone
                return (
                    <div className='card-container' key={id} >
                        <img src={image} alt={name} />
                        <div className="drone-info">
                            <p>name: <span className='name'>{name}</span> </p>
                            <p>battery: <span className='details'>{batery} mA</span> </p>
                            <p>age: <span className='details'>{age} {age > 1 ? <span>Years</span> : <span>Year</span>}</span> </p>
                        </div>
                        <Link to={`/${id}`} className='btn'>See Reports</Link>
                    </div>
                )
            })}
        </Wrapper>
    )
}
const Wrapper = styled.section`
display:grid;
gap:3rem;
font-family: 'Poppins', sans-serif;
padding:4rem 0;

.card-container{
    background-color:var(--clr-white);
border-radius:var(--big-radius);
height:auto;
padding-bottom:2rem ;
display:flex;
flex-direction:column;
align-items:center;
box-shadow:var(--card-shadow)
}
img {
    width: 100%;
    display: block;
    border-top-left-radius:inherit ;
    border-top-right-radius:inherit ;
    object-fit:cover;
  }
  p{
      color:var(--clr-grey-04);
      font-weight:600;
      text-transform:uppercase;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:4rem;

  }
.name{
    color:var(--clr-primary);
    text-transform:uppercase;
    font-weight:700;
}
.drone-info{
    padding:1rem 0;

}
.details{
    color:black;
}
.details:nth-of-type(1) {
    text-transform:none;
}
@media (min-width:600px){
    grid-template-columns: repeat(2, 1fr);
}
@media (min-width:900px){
    grid-template-columns: repeat(4, 1fr);
}
`
export default DroneCard