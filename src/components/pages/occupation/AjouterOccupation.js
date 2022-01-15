import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
function AjouterOccupation() {
    const [salles, setSalles] = useState([]);
    const [chronos, setChronos] = useState([]);
    const [occup, setOccup] = useState({
        salle: '',
        chrono: ''
    });
    const salleRef = useRef();
    const chronoRef = useRef();

    const loadSalles = () => {
        axios.get(`https://fierce-ridge-76224.herokuapp.com/salles/`).then(
            Response => {
                setSalles(Response.data);

            }
        )

    };

    const loadChronos = () => {
        axios.get(`https://fierce-ridge-76224.herokuapp.com/chronos/`).then(
            Response => {
                setChronos(Response.data);

            }
        )

    };
    const onInputChange = (e) => {
        loadOccupation()

    };
    const loadOccupation = () => {

    }
    useEffect(() => {
        loadSalles();
        loadChronos();


    }, []);
    const submitHandler = (e) => {
        e.preventDefault()

        console.log(occup)
        const condition = JSON.parse(window.localStorage.getItem('user'));
        console.log(condition.user[0]._id)
        axios.post("https://fierce-ridge-76224.herokuapp.com/occupations/", {
            salle: salleRef.current.value,
            chrono: chronoRef.current.value,
            user:condition.user[0]._id ,
        })
            .then(Response => {
                console.log(Response)
            }
            ).catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div>
                <div>
                    <h1 className="text-center text-success"> GESTION DES OCCUPATIONS</h1>
                </div>
                <div className='text-center m-3'>
                    <h3>AJOUTER DES OCCUPATIONS </h3>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className="col-md-8 text-center">
                        <form onSubmit={e => submitHandler(e)}>
                            <div className="form-group">
                                <div className="mt-3">
                                    <div class="mt-3">
                                        <label className="mb-2" for="">Les créneaux</label>
                                        <select className="form-select" ref={chronoRef} aria-label="Default select example" name="bloc" onChange={e => onInputChange(e)}>
                                            {chronos.map(b => (
                                                <option value={b._id}>{b.dateDebut} - {b.dateFin}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <label className="mb-2" for="">les salles</label>
                                    <select className="form-select" aria-label="Default select example" ref={salleRef} name="bloc" onChange={e => onInputChange(e)}>
                                        {salles.map(b => (
                                            <option value={b._id}>{b.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <input type="submit" className='btn btn-info mt-5' />
                            </div>
                        </form>
                        <div className='m-5'>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AjouterOccupation
