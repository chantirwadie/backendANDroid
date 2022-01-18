import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

function UpdateSalle() {
    const navigate = useNavigate();

    const [blocs, setBlocs] = useState([]);
    const [salles, setSalles] = useState({
        name: "",
        type: "",
        bloc: { _id: "" },
    })
    const { id } = useParams()
    const nameRef = useRef();
    const typeRef = useRef();
    const codeRef = useRef();
    const blocRef = useRef();



    useEffect(() => {
        getBlocs();
        loadSalles();

    }, []);
    const onInputChange = (e) => {
        setSalles({
            name: nameRef.current.value,
            type: typeRef.current.value,
            bloc: { _id: blocRef.current.value }

        })

    };
    const getBlocs = () => {
        axios.get("https://fierce-ridge-76224.herokuapp.com/blocs/").then(
            Response => {
                setBlocs(Response.data);
            }
        )
    }

    const loadSalles = () => {
        console.log(id)
        axios.get(`https://fierce-ridge-76224.herokuapp.com/salles/${id}`).then(
            Response => {
                setSalles(Response.data);

            }
        )

    };
    const onSubmit = e => {
        e.preventDefault();
        console.log(salles)
        axios.patch(`https://fierce-ridge-76224.herokuapp.com/salles/${id}`, {
            name: nameRef.current.value,
            type: typeRef.current.value,
            bloc: { _id: blocRef.current.value }

        });
        navigate('/salle');


    };


    return (
        <div>
            <div>
                <SideBar></SideBar>
                <div class="content-container">

                    <div class="container-fluid">
                        <div>
                            <h1 class="text-center text-success"> GESTION DES SALLES</h1>
                        </div>
                        <div className='text-center m-3'>
                            <h3>MODIFIER DES SALLES</h3>
                        </div>
                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className="col-md-8 text-center">
                                <form onSubmit={e => onSubmit(e)}>
                                    <div class="form-group">
                                        <div class="mt-3">
                                            <label class="mb-2" for="">Name :</label>
                                            <input type="text" defaultValue={salles.name} ref={nameRef} className="form-control" name='name' onChange={e => onInputChange(e)} />
                                        </div>
                                        <div class="mt-3">
                                            <label class="mb-2" for="">Type :</label>
                                            <input type="text" defaultValue={salles.type} ref={typeRef} className="form-control" name='type' onChange={e => onInputChange(e)} />
                                        </div>

                                        <div class="mt-3">
                                            <label class="mb-2" for="">Bloc</label>
                                            <select class="form-select" ref={blocRef} aria-label="Default select example" name="bloc" onChange={e => onInputChange(e)}>
                                                {blocs.map(b => (
                                                    <option defaultValue={salles.bloc._id} value={b._id}>{b.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <button type="submit" className='btn btn-info mt-5'>Modifier</button>
                                    </div>
                                </form>
                                <div className='m-5'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateSalle
