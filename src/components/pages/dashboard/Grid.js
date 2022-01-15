import React, { Component } from 'react'
import axios from 'axios';
import SideBar from '../../partials/SideBar'

export class Grid extends Component {
    constructor(props) {
       
        super(props)
    
        this.state = {
            blocs : [
         ],
        salles:[],
        blocId:""

        }
    }
    getBlocs = () => {
        axios.get("https://fierce-ridge-76224.herokuapp.com/blocs/").then(
            Response => {
                console.log(Response)
                this.setState({
                    blocs : Response.data
                    
                })
            }
        )
    }
    onInputChange = (e) => {
        this.loadSalles(e.target.value);
        this.setState({blocId:e.target.value})


    };
    loadSalles = (id) => {
        // console.log(blocRef.current.value)
        axios.post("https://fierce-ridge-76224.herokuapp.com/occupations/salleOccu", {
            bloc: id
        })
            .then(Response => { 
                this.setState({
                    salles : Response.data
                    
                })
            }
            ).catch(error => {
                console.log(error)
            })

    };
    componentDidMount(){
        this.getBlocs()
    }
    componentDidUpdate() {
        console.log(this.state.blocId)
        // this.getBlocs()
        // if(this.state.blocId != null){
        //     this.loadSalles()
        // }
      }
    render() {
        return (
            <div>
            <div>
                <SideBar></SideBar>
                <div class="content-container">

                    <div class="container-fluid">
                        <div class="mt-3">
                            <label class="mb-2" for="">Bloc</label>
                            <select class="form-select" aria-label="Default select example" name="bloc"  onChange={e => this.onInputChange(e)}>
                                {this.state.blocs.map(b => (
                                    <option value={b._id}>{b.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className='mt-3'>
                            <div class="grid">
                                {this.state.salles && this.state.salles.map(s => (
                                        <div className={(s.occup==true)?("text text-center bg-danger item"):(" text text-center bg-success item")}><h1 className="m-5"  >{s.salle.name}</h1></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Grid
