import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./home/Home";
import Tahasil from "./Tahasil/Tahasil"; 
import YojanaTable from "./YojanaTable/YojanaTable"; 
import Preloader from "../src/Preloader/Preloader";
import { Routes, Route } from "react-router-dom"; 
import TahasilTwo from './TahasilTwo/TahasilTwo'; 
// import YojanaTableTwo from "./YojanaTableTwo/YojanaTableTwo";
import YojanaTableOne from "./YojanaTable/YojanaTableOne";
import YojanaTableTwo from "./YojanaTable/YojanaTableTwo";
import YojanaTableThree from "./YojanaTable/YojanaTableThree"; 
import LoginForm from "./Login/LoginForm";
import YojanaTableFour from "./YojanaTable/YojanaTableFour";


// SGY Tables
import TableOne from '../src/YojanaTable/SGY/TableOne'
import DataTable from "./Table/DataTable";
import PieChartComponent from "./Charts/Charts";

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
          <Route path="/home" element={<Home />} />
          <Route path="/tahasil" element={<Tahasil />} />
          <Route path="/yojana" element={<YojanaTable />} />
          <Route path="/yojanatwo" element={<YojanaTableTwo/>} />
          <Route path="/tahasiltwo" element={<TahasilTwo />} /> 


          {/* Tables */}
          <Route path="/tableone" element={<YojanaTableOne />} /> 
          <Route path="/tabletwo" element={<YojanaTableTwo />} /> 
          <Route path="/tablethree" element={<YojanaTableThree />} />  
          <Route path="/tablefour" element={<YojanaTableFour />} />  


          {/* SGY Tables */}
          <Route path="/tableonesgy" element={<TableOne />} />  
          <Route path="/datatable" element={<DataTable/>}/>

          <Route path="/chart" element={<PieChartComponent/>} />

        </Routes>
      )}
    </>
  );
}

export default App;

// 08-08-2024
// i have done two tabel 1st revenue1 and 2nd egs