import React from 'react'
import { DroneCard, PageHero } from '../components'
const DroneList = () => {
    return (
        <div className='page-100'>
            <PageHero title='List' />
            <DroneCard />
        </div>
    )
}
export default DroneList