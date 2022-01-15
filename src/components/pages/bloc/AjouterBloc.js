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

export class AjouterBloc extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post("https://fierce-ridge-76224.herokuapp.com/blocs/", this.state)
            .then(Response => {
                console.log(Response)
                if(Response.data=="Error"){
                    this.refs.notify.notificationAlert(options2);

                }else{
                    this.refs.notify.notificationAlert(options);
                }
            }
            ).catch(error => {
                console.log(error)
                this.refs.notify.notificationAlert(options);
            })
    }
    refreshPage() {
        window.location.reload(false);
    }
    render() {
        console.log(this.props.name)
        const { name } = this.state
        if (this.props.name == "") {
            return (
                <div>
                    <div>
                        <h1 class="text-center text-success"> GESTION DES BLOCS</h1>
                    </div>
                    <div className='text-center m-3'>
                        <h3>AJOUTER DES Blocs</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className="col-md-8 text-center">
                            <div className='m-5'>
                                <form onSubmit={this.submitHandler}>
                                    <div class="form-group">
                                        <label for="">Name :</label>
                                        <input type="text" class="form-control" name='name' value={name} onChange={this.changeHandler} />
                                        <NotificationAlert ref="notify" zIndex={9999} onClick={() => console.log("hey")} />
                                        <input type="submit" className='btn btn-info mt-5' />
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            )
        } else {

            return (
                <div>
                    <div className='m-5'>
                        <h1 class="text-center text-success"> GESTION DES BLOCS</h1>
                    </div>
                    <div className='text-center '>
                        <h3>AJOUTER DES BLOCS</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className="col-md-8 text-center">
                            <div className='m-5'>
                                <form onSubmit={this.submitHandler}>
                                    <div class="form-group">
                                        <label for="">Name :</label>
                                        <input type="text" class="form-control" name='name' value={name} onChange={this.changeHandler} />
                                        <NotificationAlert ref="notify" zIndex={9999} onClick={() => console.log("hey")} />
                                        <input type="submit" className='btn btn-info mt-5' />
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            )
        }
    }
}

export default AjouterBloc
