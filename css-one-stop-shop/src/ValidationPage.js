import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import './ValidationPage.css';


export const ValidationPage = () => {
  const [excelData, setExcelData] = useState([]);
  const [textData, setTextData] = useState('');
  const lines = textData.split(/\n/g);
  const formValues = localStorage.getItem("formValues");
  var stringify = JSON.parse(formValues);
  const scope = stringify[0].scope
  const attribute = stringify[0].attribute;
  const marketplace = stringify[0].marketplace;

  useEffect(() => {
    const readExcel = async () => {
      if (scope === "HEALTH_PERSONAL_CARE" && attribute === "unit_count") {
        const valuesFile = await fetch('/data/HEALTH_PERSONAL_CARE/unit_count/enumeration_values.xlsx');
        const valuesData = await valuesFile.arrayBuffer();
        const workbook = XLSX.read(valuesData, {type: 'array'});
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1});
        setExcelData(jsonData);
      }
    };

    const readTextFile = async () => {
      if (scope === "SHIRT" && attribute === "material") {
        const constraintFile = await fetch('/data/SHIRT/material/enumeration_constraints.ion');
        const constraintData = await constraintFile.text();
        setTextData(constraintData);
      } else if (scope === "HEALTH_PERSONAL_CARE" && attribute === "unit_count") {
        const constraintFile = await fetch('/data/HEALTH_PERSONAL_CARE/unit_count/enumeration_constraints.ion');
        const constraintData = await constraintFile.text();
        setTextData(constraintData);
      }
    };

    readExcel();
    readTextFile();
  }, []);

  return (
  <div>
  <div className="header-container">
    <div className="header-container">
      <h1 className="header-title">Enumeration Constraints</h1>
    </div>
    <div className="textbox">
        <pre className="constraint-text">
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </pre>
    </div>
    <h1 className="header-title">Enumeration Values</h1>
  </div>
      <div className="table-container">
        <table className="excel-table">
          <thead>
          <tr>
            {excelData.length > 0 &&
              excelData[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
          </tr>
          </thead>
          <tbody>
          {excelData.slice(1).map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};