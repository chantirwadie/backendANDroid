import React from 'react'
import SideBar from '../partials/SideBar'
import ChartWithDate from './ChartWithDate'
import { DaylyChart } from './DaylyChart'

function AllCharts() {
    return (
        <div>
            <div>
            <SideBar></SideBar>
            <div class="content-container">

                <div class="container-fluid">
                    <div className='row'>
                        <div className='col-6'>
                            <DaylyChart></DaylyChart>

                        </div>
                        <div className='col-6'>
                            <ChartWithDate></ChartWithDate>

                        </div>
                    </div>                    
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default AllCharts
