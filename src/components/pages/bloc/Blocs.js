import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import '../../../../node_modules/react-confirm-alert/src/react-confirm-alert.css';

export class Blocs extends Component {
    constructor(props) {
       
        super(props)
    
        this.state = {
            blocs : [
         ],
         id:"",
        }
        this.deleteBloc = this.deleteBloc.bind(this);
    }
    
    getBlocs = () =>{
        axios.get("https://fierce-ridge-76224.herokuapp.com/blocs/").then(
            Response =>{
                this.setState({
                    blocs : Response.data
                    
                })
               
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
                      this.deleteBloc(b);
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
    deleteBloc(b){
        
        console.log("https://fierce-ridge-76224.herokuapp.com/blocs/"+b._id)
        axios.delete("https://fierce-ridge-76224.herokuapp.com/blocs/"+b._id).then(
            Response =>{
                console.log("done");
            }
        )
    }
    updateBloc(name){
        console.log(name);
        

    }
    componentDidMount(){
        this.getBlocs()
    }
    componentDidUpdate() {
        this.getBlocs()
      }
      
    
    render() {
        return (
            <div className='row'>
                <div className='text-center m-3'>
                    <h3>LISTES DES BLOCS</h3>
                </div>
                <div className='col-md-2'></div>
                <div className="col-md-8 text-center">
                
                <div className='m-5'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>VERSION</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.blocs.map(b =>(
                                
                            <tr>
                                
                                <td scope="row">{b._id}</td>
                                        <td>{b.name}</td>
                                        <td>{b.__v}</td>
                                <td><Link className='btn btn-info' to={`/update/${b._id}`} onClick={()=>this.updateBloc(b.name)}>Update</Link></td>
                                <td><button className='btn btn-danger ' onClick={()=>this.deleteAlert(b)}>Delete</button></td>
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


export default Blocs
