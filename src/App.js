import logo from './logo.svg';
import './App.css';
import SideBar from './components/partials/SideBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './components/user/Login';
import BlocT from './components/pages/bloc/BlocT';
import SalleT from './components/pages/salle/SalleT';
import OccupationT from './components/pages/occupation/OccupationT';
import ChronoT from './components/pages/creneaux/ChronoT';
import GridView from './components/pages/dashboard/GridView';
import ChartWithDate from './components/charts/ChartWithDate';
import AllCharts from './components/charts/AllCharts';
import Register from './components/user/Register';
import Grid from './components/pages/dashboard/Grid';


function App() {
  const condition = JSON.parse(window.localStorage.getItem('user'));
  // console.log(condition.response)
  return (
    <div className="App">

      <Routes>
        <Route path='/login' element={<Login />} exact />
        <Route path='/register' element={<Register/>} exact />

        <Route path='/' element={<GridView />} />
        <Route path='/statistique' element={<AllCharts />} />
        <Route path='/bloc' element={<BlocT />} exact/>
        {/* <Route path='/bloc'>{t?(<BlocT/>):(<Navigate to= '/login'/>)}</Route> */}

        <Route path='/salle' element={<SalleT />} />
        <Route path='/creneau' element={<ChronoT />} />
        <Route path='/occupation' element={<OccupationT />} />
      </Routes>


    </div>
  );
}

export default App;
