import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import {
 Features2x2 
} from './ui-components';
// import {ExcelRenderer, OutTable} from 'react-excel-renderer';
// import * as XLSX from 'xlsx/xlsx.mjs';
import consistencyMetricsData from './data/Consistency_Metrics_SHIRT-material.json'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
 HeroLayout2 
} from './ui-components';
import InputForm from './InputForm';
import { Outlet, Link } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);

  }
  

  render() {


    return (
      <div className="App">
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<HeroLayout2 autoLayoutHorizontal37891393={<button>Get Started</button>}/>}>
              <Route index element={<HeroLayout2 />} />
              <Route path="inputForm" element={<InputForm />} />
            </Route>
          </Routes>
    </BrowserRouter>
    </div>
    );
  }
}

export default App;
