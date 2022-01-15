import React from 'react'
import SideBar from '../partials/SideBar'
import ChartWithDate from './ChartWithDate'

function AllCharts() {
    return (
        <div>
            <div>
            <SideBar></SideBar>
            <div class="content-container">

                <div class="container-fluid">

                    <ChartWithDate></ChartWithDate>
                    
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default AllCharts
