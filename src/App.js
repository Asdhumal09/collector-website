import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tahasil from './pages/Tahasil';
import Preloader from './pages/Preloader';
import YojnaPage from './pages/YojnaPage';
import YojanaTable from './pages/YojanaTable';
import LoginForm from './pages/LoginForm';
import Cards from './pages/CardData';
// SGY Tables
import Chart from './pages/chart';

import PrivateRoute from './components/PrivateRoute';
import { XDChart } from './pages/XDChart';
import VisitPage from './pages/visitPage';

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
          <Route path="/yojnaPage/:id" element={<PrivateRoute element={YojnaPage} />} />
          <Route path="chart/:id" element={<PrivateRoute element={Chart} />} />
          <Route path="cards/:id" element={<PrivateRoute element={Cards} />} />
          <Route path="/yojnaPage/:id/yojnaTable/:subyojnaId" element={<PrivateRoute element={YojanaTable} />} />
          <Route path="/XDchart" element={<PrivateRoute element={XDChart} />}/>
          <Route path="/visit" element={<PrivateRoute element={VisitPage} />}/>
        </Routes>
      )}
    </>
  );
}

export default App;
