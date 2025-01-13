import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Tahasil from './Tahasil/Tahasil';
import YojanaTable from './YojanaTable/YojanaTable';
import Preloader from './Preloader/Preloader';
import TahasilTwo from './TahasilTwo/TahasilTwo';
import YojanaTableOne from './YojanaTable/YojanaTableOne';
import YojanaTableTwo from './YojanaTable/YojanaTableTwo';
import YojanaTableThree from './YojanaTable/YojanaTableThree';
import LoginForm from './Login/LoginForm';
import YojanaTableFour from './YojanaTable/YojanaTableFour';
import Cards from './Table/CardData';
// SGY Tables
import TableOne from './YojanaTable/SGY/TableOne';
import DataTable from './Table/DataTable';
import PieChartComponent from './Charts/Charts';
import SgyOne from './Table/SgyOne';

import PrivateRoute from './components/PrivateRoute';
import TahsilTable from './YojanaTable/TahsilTable';
import { XDChart } from './Charts/3DChart';
import VisitPage from './visit/visitPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginForm />} />
          
          {/* Protected Routes */}
          <Route path="/home" element={<PrivateRoute element={Home} />} />
          <Route path="/tahasil" element={<PrivateRoute element={Tahasil} />} />
          <Route path="/yojana" element={<PrivateRoute element={YojanaTable} />} />
          <Route path="/yojanatwo" element={<PrivateRoute element={YojanaTableTwo} />} />
          <Route path="/tahasiltwo/:id" element={<PrivateRoute element={TahasilTwo} />} />
          <Route path="sgyOne/:id" element={<PrivateRoute element={SgyOne} />} />
          <Route path="cards/:id" element={<PrivateRoute element={Cards} />} />
          <Route path="/tahasiltwo/:id/tableone/:subyojnaId" element={<PrivateRoute element={YojanaTableOne} />} />
          <Route path="/tahasiltwo/:id/tahsilOne/:subyojnaId" element={<PrivateRoute element={TahsilTable} />} />
          <Route path="/tabletwo" element={<PrivateRoute element={YojanaTableTwo} />} />
          <Route path="/tablethree" element={<PrivateRoute element={YojanaTableThree} />} />
          <Route path="/tablefour" element={<PrivateRoute element={YojanaTableFour} />} />
          <Route path="/tableonesgy" element={<PrivateRoute element={TableOne} />} />
          <Route path="/datatable" element={<PrivateRoute element={DataTable} />} />
          <Route path="/chart" element={<PrivateRoute element={PieChartComponent} />} />
          <Route path="/3dchart" element={<PrivateRoute element={XDChart} />}/>
          <Route path="/visit" element={<PrivateRoute element={VisitPage} />}/>
        </Routes>
      )}
    </>
  );
}

export default App;
