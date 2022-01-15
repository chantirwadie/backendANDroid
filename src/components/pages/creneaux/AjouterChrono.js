import React, { Component } from 'react'
import axios from 'axios'
import NotificationAlert from 'react-notification-alert';

var options = {};
options = {
    place: 'bl',
    message: (
        <div>
            <div>
                Bloc est bien <b>Ajouter</b>
            </div>
        </div>
    ),
    type: "primary",
    icon: "now-ui-icons ui-1_bell-53",
    autoDismiss: 4
}
var options2 = {};
options2 = {
    place: 'bl',
    message: (
        <div>
            <div>
                Il ya un probleme de <b>Connexion</b> ou dans <b> Les valeur entreé</b>
            </div>
        </div>
    ),
    type: "danger",
    icon: "now-ui-icons ui-1_bell-53",
    autoDismiss: 4
}

export class AjouterChrono extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dateDebut:"",
             dateFin:"",
        }
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value
        })
    }
    submitHandler = (e)=>{
        e.preventDefault()
        if(this.state.dateDebut=="" && this.state.dateFin==""){
            this.refs.notify.notificationAlert(options2);
        }else{
            console.log(this.state)
            axios.post("https://fierce-ridge-76224.herokuapp.com/chronos/",this.state)
            .then(Response=>
                {
                    
                        this.refs.notify.notificationAlert(options);

                    
                }
            ).catch(error=>{
                console.log(error)
                this.refs.notify.notificationAlert(options);

            })
        }
        
    }
    
    render() {
        const {dateDebut,dateFin} = this.state

        return (
            
            <div>
                <div>
                    <h1 class="text-center text-success"> GESTION CRENEAUX HORAIRE</h1>
                </div >
                <div className='text-center m-3'>
                    <h3>AJOUTER CRENEAUX HORAIRE</h3>
                </div>
                <div className='row'>
                <div className='col-md-2'></div>
                <div className="col-md-8 text-center">
                <form  onSubmit={this.submitHandler}>
                    <div class="form-group">
                    <div class="mt-3">
                        <label class="mb-2" for="">Date De Debut :</label>
                        <input type="time" className="form-control" name='dateDebut' value={dateDebut} onChange={this.changeHandler}/>
                    </div>
                    <div class="mt-3">
                        <label class="mb-2" for="">Date De Fin :</label>
                        <input type="time" className="form-control" name='dateFin' value={dateFin} onChange={this.changeHandler}/>
                    </div>
                    <NotificationAlert ref="notify" zIndex={9999} onClick={() => console.log("hey")} />
                    <input type="submit" className='btn btn-info mt-5'/>
                </div>
                </form>
                </div>

                </div>
                
            </div>
        )
    }
}

export default AjouterChrono
