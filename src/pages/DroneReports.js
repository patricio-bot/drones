import React from 'react'
import { PageHero, Table } from '../components'
import { useParams } from 'react-router-dom'
import droneReports from '../utils/data.json'
import dronesList from '../utils/drones.json'

import styled from 'styled-components'
const DroneReports = () => {
    const { id } = useParams()

    let getDrone = dronesList.drones.filter((item) => item.id === Number(id))
    let getList = droneReports.reports.filter((obj) => obj.drone_id === Number(id))
    let header = Object.keys(getList[0]).slice(2)
    header[4] = 'traffic'
    header[3] = 'longitude'



    return (

        <div className="page-100">
            <PageHero title='Report' />
            <section className="section-center">
                {getDrone.map((drone, index) => {
                    return (
                        <DroneContainer key={index}>
                            <h3>{drone.name}</h3>
                            <img src={drone.image} alt={drone.name} />
                        </DroneContainer>
                    )
                })}
                <TableContainer>
                    <table>
                        <tbody>
                            <tr>
                                {header.map((key, index) => {

                                    return <th key={index}>{key}</th>
                                })}
                            </tr>
                            {getList.map((drone) => {
                                return <Table key={drone.id} {...drone} />
                            })}
                        </tbody>
                    </table>
                </TableContainer>

            </section>
        </div>

    )
}

const DroneContainer = styled.div`
display:flex;
align-items:center;
padding:2rem 0rem;
font-family: 'Poppins', sans-serif;
font-weight:700;
color:var(--clr-primary);

img {
  display: block;
  object-fit:cover;
  height:50px;
  box-shadow:var(--soft-shadow);
  margin-left:1rem;
} 

`

const TableContainer = styled.div`
height:auto;
min-height:60vh; 
box-shadow:var(--dark-shadow);
margin-bottom:4rem;
font-family: 'Lato', sans-serif;
overflow-x:auto;
background:var(--clr-white);
table {
  width: 100%;
  height: auto;
  border:none;
  border-collapse: collapse;
}
th {
    text-transform:capitalize;
  text-align: left;
  padding: 2rem ;
  font-size:1.4rem;
  letter-spacing:var(--spacing);
  color:var(--clr-grey-03);
  border-bottom:1px solid var(--clr-grey-06);
}
`
export default DroneReports