import React, { Component } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';
import QRCode from "react-qr-code";
import { confirmAlert } from 'react-confirm-alert'; // Import
import '../../../../node_modules/react-confirm-alert/src/react-confirm-alert.css';
export class Salles extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            salles : []
        }            
    }

    // refreshTable = () => {
    //     var id = document.getElementById("example");

    // }

    getSalles = () =>{
        axios.get("https://fierce-ridge-76224.herokuapp.com/salles/").then(
            Response =>{
                this.setState({
                    salles : Response.data,
                })
                
            }
        )
    }
    componentDidMount(){
        this.getSalles()
    } 
    componentDidUpdate() {
        this.getSalles()
      }
    deleteSalle(id){
        axios.delete("https://fierce-ridge-76224.herokuapp.com/salles/"+id).then(
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
                      this.deleteSalle(b);
                      onClose();
                    }}
                  >
                    Oui, supprimez-le !

                  </button>
                </div>
              );
            }
          })
        }
    render() {
        return (
            <div className='row'>
                <div className='text-center m-3'>
                    <h3>LISTES DES SALLES</h3>
                </div>
                <div className='col-md-1'></div>
                <div className="col-md-10 text-center">
                <div className='m-5'>
                    <table class="table table-striped table-bordered" id="example">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>TYPE</th>
                                <th>CodeQR</th>
                                <th>BLOC</th>
                                <th>VERSION</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.salles.map(s =>(
                                
                            <tr>
                                <td scope="row">{s._id}</td>
                                        <td>{s.name}</td>
                                        <td>{s.type}</td>
                                        <td><QRCode value={s._id} /></td>
                                        <td>{s.bloc.name}</td>
                                        <td>{s.__v}</td>
                                <td><Link className='btn btn-info' to={`/UpdateSalle/${s._id}`} >Update</Link></td>
                                <td><a className='btn btn-danger ' onClick={()=>this.deleteAlert(s._id)}>Delete</a></td>                            </tr>
                                ))}
                        </tbody>
                    </table>
                    
                </div>
                </div>
            </div>
        )
    }
}

export default Salles
