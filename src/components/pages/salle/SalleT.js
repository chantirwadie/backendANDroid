import React from 'react'
import SideBar from '../../partials/SideBar';
import AjouterSalle from './AjouterSalle';
import Salles from './Salles';

function salleT() {
    return (
        <div>
            <SideBar></SideBar>
            <div class="content-container">

                <div class="container-fluid">

                    <AjouterSalle />
                    <Salles />

                </div>
            </div>
        </div>

    )
}

export default salleT
