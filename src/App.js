import logo from './logo.svg';
import './App.css';
import SideBar from './components/partials/SideBar';
import { Routes, Route, BrowserRouter ,Navigate} from "react-router-dom";
import Login from './components/user/Login';
import BlocT from './components/pages/bloc/BlocT';
import SalleT from './components/pages/salle/SalleT';
import OccupationT from './components/pages/occupation/OccupationT';
import ChronoT from './components/pages/creneaux/ChronoT';
import GridView from './components/pages/dashboard/GridView';
import UpdateBloc from './components/pages/bloc/UpdateBloc'
import UpdateChrono from './components/pages/creneaux/UpdateChrono';
import UpdateSalle from './components/pages/salle/UpdateSalle';
import ChartWithDate from './components/charts/ChartWithDate';
import AllCharts from './components/charts/AllCharts';
import Register from './components/user/Register';
import Grid from './components/pages/dashboard/Grid';


function App() {
  var a=false
  const condition = JSON.parse(window.localStorage.getItem('user'));
  if(condition==null){
    a=false
  }else{
    a=true

  }
  console.log(condition)
  console.log(a)

  return (
    <div className="App">

      <Routes>
        <Route path='/login' element={<Login />} exact />
        <Route path='/register' element={<Register/>} exact />
        <Route path='/update/:id' element={<UpdateBloc />}/>
        <Route path='/updateChrono/:id' element={<UpdateChrono />}/>
        <Route path='/UpdateSalle/:id' element={<UpdateSalle />}/>
        <Route path='/'  element={<GridView/>} />
        <Route path='/statistique' element={<AllCharts/>} />
        <Route path='/bloc' element={a?(<BlocT/>):(<Navigate to= '/login'/>)} exact/>
        {/* <Route path='/bloc'>{a?(<BlocT/>):(<Navigate to= '/login'/>)}</Route> */}

        <Route path='/salle'  element={a?(<SalleT/>):(<Navigate to= '/login'/>)} />
        <Route path='/creneau'  element={a?(<ChronoT/>):(<Navigate to= '/login'/>)}  />
        <Route path='/occupation'  element={a?(<OccupationT/>):(<Navigate to= '/login'/>)}  />
      </Routes>


    </div>
  );
}

export default App;
