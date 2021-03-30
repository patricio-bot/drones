import React from 'react'
import dronesList from '../utils/drones.json'
import { DroneCard, PageHero } from '../components'
import styled from 'styled-components'

const DroneList = () => {
    return (
        <div className='page-100'>
            <PageHero title='List' />
            <Wrapper className='section-center'>
                {dronesList.drones.map((drone) => {
                    return <DroneCard key={drone.id} {...drone} />
                })}
            </Wrapper>
        </div>
    )
}
const Wrapper = styled.section` 
display:grid;
gap:3rem;
padding:4rem 0;

@media (min-width:600px){
    grid-template-columns: repeat(2, 1fr);
}
@media (min-width:900px){
    grid-template-columns: repeat(4, 1fr);
}
`
export default DroneList