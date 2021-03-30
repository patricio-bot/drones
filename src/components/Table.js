import React from 'react'
import styled from 'styled-components'
import { formatTime, classType } from '../utils/helpers'

const Table = ({ time, speed, latitude, longitud, traffic_conditions: traffic, drone_id }) => {


    return (
        <Wrapper key={drone_id}>
            <td>{formatTime(time)}</td>
            <td>{speed}</td>
            <td>{latitude}</td>
            <td>{longitud}</td>
            <td><span className={classType(traffic)}>{traffic}</span> </td>
        </Wrapper>
    )
}
const Wrapper = styled.tr` 
transition: var(--transition);
&:not(:last-child){
    border-bottom:1px solid var(--clr-grey-06);
}
&:hover{
    background-color:var( --clr-primary-lightest);
    cursor:pointer;
}
td{
    padding: 2rem 1rem;
    font-size:1.2rem;
    text-align:center;
}

.success{
    color:var(--clr-success);
    background:var(--clr-success-light);
    border:1px solid var(--clr-success);
    padding: 0.5rem 1rem;
  border-radius: var(--small-radius);
}
.danger{
    color:var(--clr-error);
    background:var(--clr-error-light);
    border:1px solid var(--clr-error);
    padding: 0.5rem 1rem;
  border-radius: var(--small-radius);
}
.warning{
    color:var(--clr-warning);
    background:var(--clr-warning-light);
    border:1px solid var(--clr-warning);
    padding: 0.5rem 1rem;
  border-radius: var(--small-radius);
  
}
@media (min-width:600px){
    td{
    padding: 2rem;
    text-align:left;
}
}

`
export default Table