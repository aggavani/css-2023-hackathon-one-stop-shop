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
import InputForm from './InputForm';
import Home from './Home';
import AttributeInfo from './AttributeInfo'

class App extends Component {
  constructor(props) {
    super(props);

  }
  

  render() {
    return (
      <div className="App">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/inputForm" element={<InputForm />} />
              <Route path="/attributeInfo" element={<AttributeInfo />} />
            </Route>
          </Routes>

    </div>
    );
  }
}

export default App;
