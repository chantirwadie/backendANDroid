import axios from 'axios'

import React, { useState, useEffect, useRef } from 'react'
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


function AjouterSalle() {

    const [blocs, setBlocs] = useState([]);
    const [salles, setSalles] = useState({
        name: "",
        type: "",
        codeQR: "",
        bloc: { _id: "" },
    })
    const nameRef = useRef();
    const typeRef = useRef();
    const blocRef = useRef();
    const notify = useRef();



    useEffect(() => {
        getBlocs();

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


    const onSubmit = e => {
        e.preventDefault();
        console.log(salles)
        axios.post(`https://fierce-ridge-76224.herokuapp.com/salles/`, {
            name: nameRef.current.value,
            type: typeRef.current.value,
            bloc: { _id: blocRef.current.value }

        })
        .then(Response=>
            {
                console.log(Response);
                

                
            }
        ).catch(error=>{
            console.log(error)

        })


    };


    return (
        <div>
            <div>
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
                                    <input type="text" ref={nameRef} className="form-control" name='name' onChange={e => onInputChange(e)} />
                                </div>
                                <div class="mt-3">
                                    <label class="mb-2" for="">Type :</label>
                                    <input type="text" ref={typeRef} className="form-control" name='type' onChange={e => onInputChange(e)} />
                                </div>

                                <div class="mt-3">
                                    <label class="mb-2" for="">Bloc</label>
                                    <select class="form-select" ref={blocRef} aria-label="Default select example" name="bloc" onChange={e => onInputChange(e)}>
                                        {blocs.map(b => (
                                            <option value={b._id}>{b.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <NotificationAlert ref={notify} zIndex={9999} onClick={() => console.log("hey")} />
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

export default AjouterSalle
