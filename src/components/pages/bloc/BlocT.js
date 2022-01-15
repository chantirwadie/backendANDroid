import React from 'react'
import SideBar from '../../partials/SideBar'
import AjouterBloc from './AjouterBloc'
import Blocs from './Blocs'
function BlocT() {
    return (
        <div>
            <SideBar></SideBar>
            <div class="content-container">

                <div class="container-fluid">
                    <AjouterBloc></AjouterBloc>
                    <Blocs></Blocs>

                </div>
            </div>

        </div>
    )
}

export default BlocT
