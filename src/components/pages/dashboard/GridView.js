import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import SideBar from '../../partials/SideBar'

function GridView() {
    const [blocs, setBlocs] = useState([]);
    const [salles, setSalles] = useState(null)
    const blocRef = useRef();
    const getBlocs = () => {
        axios.get("https://fierce-ridge-76224.herokuapp.com/blocs/").then(
            Response => {
                setBlocs(Response.data);
                loadSalles(Response.data[0]._id)
            }
        )
    }
    const onInputChange = (e) => {
        loadSalles(e.target.value);


    };
    const loadSalles = (id) => {
        console.log(blocRef.current.value)
        axios.post("https://fierce-ridge-76224.herokuapp.com/occupations/salleOccu", {
            bloc: id
        })
            .then(Response => { 
                console.log(Response.data)
                setSalles([...Response.data])

            }
            ).catch(error => {
                console.log(error)
            })

    };

    useEffect(() => {
        getBlocs();
    });
    return (
        <div>
            <div>
                <SideBar></SideBar>
                <div class="content-container">

                    <div class="container-fluid">
                        <div class="mt-3">
                            <label class="mb-2" for="">Bloc</label>
                            <select class="form-select" ref={blocRef}  aria-label="Default select example" name="bloc"  onChange={e => onInputChange(e)}>
                                {blocs.map(b => (
                                    <option value={b._id}>{b.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className='mt-3'>
                            <div class="grid">
                                {salles && salles.map(s => (
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

export default GridView
