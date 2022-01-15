import React from 'react'
import SideBar from '../../partials/SideBar'
import AjouterChrono from './AjouterChrono'
import Chronos from './Chronos'

function ChronoT() {
    return (
        <div>
            <SideBar></SideBar>
            <div class="content-container">

                <div class="container-fluid">

                    <AjouterChrono></AjouterChrono>
                    <Chronos></Chronos>

                </div>
            </div>
        </div>
    )
}

export default ChronoT
