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
                        <div>
                            <h1 className="text-center text-success"> Statistiques</h1>
                        </div>
                        <div className='text-center m-3'>
                            <h3>les Salles Occupés</h3>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-6'>
                                <div className='text-center m-3'>
                                    <h4 className='text-success'>Les occupations des salles la semaine précédant</h4>
                                </div>
                                <DaylyChart></DaylyChart>

                            </div>
                            <div className='col-6'>
                                <div className='text-center m-3'>
                                    <h4 className='text-success'>Les occupations ajouter chaque jour</h4>
                                </div>
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
