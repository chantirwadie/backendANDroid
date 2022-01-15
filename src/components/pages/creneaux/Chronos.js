import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import '../../../../node_modules/react-confirm-alert/src/react-confirm-alert.css';
export class Chronos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             chronos:[]
        }
    }
    getChrono = () =>{
        axios.get("https://fierce-ridge-76224.herokuapp.com/chronos/").then(
            Response =>{
                this.setState({
                    chronos : Response.data,
                })
            }
        )
    }
    deleteChrono=(id)=>{
        axios.delete("https://fierce-ridge-76224.herokuapp.com/chronos/"+id).then(
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
                      this.deleteChrono(b);
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
    componentDidMount(){
        this.getChrono()
    } 
    componentDidUpdate() {
        this.getChrono()
      }
    render() {
        return (
            <div className='row'>
                <div className='text-center m-3'>
                    <h3>LISTES DES CRENEAUX HORAIRE</h3>
                </div>
                <div className='col-md-2'></div>
                <div className="col-md-8 text-center">

                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE DEBUT</th>
                            <th>DATE FIN</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.chronos.map(chrono =>(
                             
                             <tr>
                                 
                                        <td scope="row">{chrono._id}</td>
                                         <td>{chrono.dateDebut}</td>
                                         <td>{chrono.dateFin}</td>
                                         <td><Link className='btn btn-info' to={`/updateChrono/${chrono._id}`} >Update</Link></td>
                                        <td><a className='btn btn-danger' onClick={()=>this.deleteAlert(chrono._id)}>Delete</a></td>
                             </tr>
                                 ))}
                    </tbody>
                </table>
                </div>
            </div>


        )
    }
}

export default Chronos
