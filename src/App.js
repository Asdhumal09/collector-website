import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tahasil from './pages/Tahasil';
import Preloader from './pages/Preloader';
import YojnaPage from './pages/YojnaPage';
import YojanaTable from './pages/YojanaTable';
import LoginForm from './pages/LoginForm';
import Cards from './pages/CardData';
import Chart from './pages/chart';
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
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/tahasil" element={<Tahasil/>} />
          <Route path="/yojnaPage/:id" element={<YojnaPage/>} />
          <Route path="chart/:id" element={<Chart/>}/>
          <Route path="cards/:id" element={<Cards/>} />
          <Route path="/yojnaPage/:id/yojnaTable/:subyojnaId" element={<YojanaTable/>} />
          <Route path="/XDchart" element={<XDChart/>}/>
          <Route path="/visit" element={<VisitPage/>}/>
        </Routes>
      )}
    </>
  );
}

export default App;
