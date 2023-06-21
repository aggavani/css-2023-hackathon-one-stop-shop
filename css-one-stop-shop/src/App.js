import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputForm from './InputForm';
import Home from './Home';
import AttributeInfo from './AttributeInfo';
import Header from './Header';
import AsinInfo from './AsinInfo'
import AsinInputForm from './AsinInputForm';
import { ValidationPage } from './ValidationPage';
import { MetricsPage } from './MetricsPage';
import { CompletenessPage } from './CompletenessPage';
import { NormalizationPage } from './NormalizationPage';


class App extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div className="App">
        <Header />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/inputForm" element={<InputForm />} />
              <Route path="/attributeInfo" element={<AttributeInfo />} />
              <Route path="/normalization" element={<NormalizationPage />} />
              <Route path="/metrics" element={<MetricsPage />} />
              <Route path="/completeness" element={<CompletenessPage />} />
              <Route path="/asinInfo" element={<AsinInfo />} />
              <Route path="/asinInputForm" element={<AsinInputForm />} />
              <Route path="/validation" element={<ValidationPage />} />
            </Route>
          </Routes>

    </div>
    );
  }
}

export default App;
