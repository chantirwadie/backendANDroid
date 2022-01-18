import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
function UpdateBloc() {
  const navigate = useNavigate();
  const { id } = useParams()
  const [bloc, setbloc] = useState({
    name: ""
  });
  const { name } = bloc;
  const onInputChange = e => {
    setbloc({ ...bloc, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    axios.patch(`https://fierce-ridge-76224.herokuapp.com/blocs/${id}`, bloc);
    navigate('/');
  };
  const loadUser = async () => {
    const result = await axios.get(`https://fierce-ridge-76224.herokuapp.com/blocs/${id}`);
    setbloc(result.data);
    console.log(bloc)
  };

  return (
    <div>
      <div>
        <SideBar></SideBar>
        <div class="content-container">

          <div class="container-fluid">
            <div>
              <h1 class="text-center text-success"> GESTION DES BLOCS</h1>
            </div>
            <div className='text-center m-3'>
              <h3>MODIFIER DES BLOCS</h3>
            </div>
            <div className='row'>
              <div className='col-md-2'></div>
              <div className="col-md-8 text-center">
                <div className='m-5'>
                  <form onSubmit={e => onSubmit(e)} >
                    <div class="form-group">
                      <label for="">Name :</label>
                      <input type="text" class="form-control" name='name' value={name}
                        onChange={e => onInputChange(e)} />
                      <button type="submit" className='btn btn-info mt-5'>Modifier</button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UpdateBloc
