import React from 'react'
import SideBar from '../../partials/SideBar'
import AjouterOccupation from './AjouterOccupation'
import Occupations from './Occupations'

function OccupationT() {
    return (
        <div>
            <SideBar></SideBar>
            <div class="content-container">

                <div class="container-fluid">

                    <AjouterOccupation></AjouterOccupation>
                    <Occupations></Occupations>

                </div>
            </div>
        </div>

    )
}

export default OccupationT
