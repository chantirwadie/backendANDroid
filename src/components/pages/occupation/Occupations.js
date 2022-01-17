import React, { Component } from 'react'
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert'; // Import
import '../../../../node_modules/react-confirm-alert/src/react-confirm-alert.css';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('wss:http://fierce-ridge-76224.herokuapp.com/');

export class Occupations extends Component {
    constructor(props) {
        super(props)

        this.state = {
            salles:[],
            occupations:null,
            date:"",
            salle:""
        }
    }
    getOccupation = () => {
        axios.get("https://fierce-ridge-76224.herokuapp.com/occupations/").then(
            Response => {
                this.setState({
                    occupations: Response.data
                })
            }
        )
    }
    getSalle = () => {
        axios.get("https://fierce-ridge-76224.herokuapp.com/salles/").then(
            Response => {
                this.setState({
                    salles: Response.data
                })
            }
        )
    }
    chercherDate = (date) => {
        var newDate
        if(date == ''){
            newDate =''
        }else{
            const val = date.split('-')
            newDate = val[1]+"/"+val[2]+"/"+val[0];
        }
        axios.put("https://fierce-ridge-76224.herokuapp.com/occupations/",{created_at:newDate}).then(
            Response => {
                this.setState({
                    occupations: Response.data
                })
            }
        )
    }
    chercherSalle = (salle) => {
        axios.put("https://fierce-ridge-76224.herokuapp.com/occupations/salle",{salle:salle}).then(
            Response => {
                console.log(Response)
                this.setState({
                    occupations: Response.data
                })
            }
        )
    }
    clearDate = () => {
        this.setState(
            {
                salle:""
            }
        )
    }
    deleteOccupation(id){
        axios.delete("http://fierce-ridge-76224.herokuapp.com/occupations/"+id).then(
            Response =>{
                console.log("done");
            }
        )
    }
    deleteAlert(b){
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui'>
                  <h1 className='text text-danger'>Vous-êtes sûr ?</h1>
                  <p>Vous souhaitez supprimer ces données ?</p>
                  <button className='btn btn-danger' onClick={onClose}>No</button>
                  <button className='btn btn-info'
                    onClick={() => {
                      this.deleteOccupation(b);
                      onClose();
                    }}
                  >
                    Oui, supprimez-le !

                  </button>
                </div>
              );
            }
          });
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    componentDidMount() {
        this.chercherSalle(this.state.salle)
        this.getSalle()
    }
    componentDidUpdate() {
        this.chercherSalle(this.state.salle)
    }
    // componentWillMount() {
    //     client.onopen = () => {
    //      console.log('WebSocket Client Connected');
    //     };
    //     client.onmessage = (message) => {
    //             this.chercherSalle(this.state.salle)

    //     };
    //   }

    render() {
        const {date} =this.state
        return (
            <div className='row'>
                <div className='text-center m-3'>
                    <h3>LISTES DES OCCUPATIONS</h3>
                </div>
                <div className='col-md-1'></div>
                <div className="col-md-10 text-center">
                <div className='row'>
                <div className='col-md-4'>
                <div class="form-group">
                          <div className='row'>
                          <div className='mb-3'>
                          
                          </div>
                          
                          </div>
                        </div>
                </div>
                    <div className='col-md-4'>
                        <div class="form-group">
                        <label className="mb-2" for="">Chercher Par Salle</label>
                                    <select className="form-select" aria-label="Default select example" name="salle" onChange={e => this.changeHandler(e)}>
                                        {this.state.salles.map(b => (
                                            <option value={b._id}>{b.name}</option>
                                        ))}
                                    </select>
                         
                          <div className='mt-3'>
                            <button className='btn btn-info' onClick={()=>this.clearDate()}>Obtenir toutes les salles</button>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='m-5'>
                        <table class="table table-striped table-bordered" id="example">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>SALLE</th>
                                    <th>CRENEAU</th>
                                    <th>AJOUTER PAR</th>
                                    <th>DATE DE RESERVATION</th>
                                    <th>DATE DE CHANGMENT</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.occupations && this.state.occupations.map(occupation => (
                                    <tr>
                                        <td scope="row">{occupation._id}</td>
                                        <td>{occupation.salle.name}</td>
                                        <td>{occupation.chrono.dateDebut}-{occupation.chrono.dateFin}</td>
                                        <td>{occupation.user.nom} {occupation.user.prenom}</td>
                                        <td>{occupation.created_at}</td>
                                        <td>{occupation.updated_at}</td>
                                        <td><a className='btn btn-danger ' onClick={()=>this.deleteAlert(occupation._id)}>Delete</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

export default Occupations
