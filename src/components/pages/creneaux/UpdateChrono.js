import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
function UpdateChrono() {
  const navigate = useNavigate();
  const { id } = useParams()
  const [chrono, setChrono] = useState({
    dateDebut: "",
    dateFin: ""
  });
  const { dateDebut, dateFin } = chrono;
  const onInputChange = e => {
    setChrono({ ...chrono, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    axios.patch(`https://fierce-ridge-76224.herokuapp.com/chronos/${id}`, chrono);
    navigate('/chrono');


  };

  const loadUser = async () => {
    const result = await axios.get(`https://fierce-ridge-76224.herokuapp.com/chronos/${id}`);
    setChrono(result.data);
  };
  return (
    <div>
      <div>
        <div>
          <h1 class="text-center text-success"> GESTION DES CHRONOS</h1>
        </div >
        <div className='text-center m-3'>
          <h3>MODIFIER DES CHRONOS</h3>
        </div>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className="col-md-8 text-center">
            <form onSubmit={e => onSubmit(e)}>
              <div class="form-group">
                <div class="mt-3">
                  <label class="mb-2" for="">Date De Debut :</label>
                  <input type="time" className="form-control" name='dateDebut' value={dateDebut} onChange={e => onInputChange(e)} />
                </div>
                <div class="mt-3">
                  <label class="mb-2" for="">Date De Fin :</label>
                  <input type="time" className="form-control" name='dateFin' value={dateFin} onChange={e => onInputChange(e)} />
                </div>
                <button type="submit" className='btn btn-info mt-5'>Modifier</button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default UpdateChrono
