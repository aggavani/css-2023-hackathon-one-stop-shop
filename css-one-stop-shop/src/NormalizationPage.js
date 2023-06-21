import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import * as XLSX from 'xlsx';
import './NormalizationPage.css';

export const NormalizationPage = () => {
    const [excelData, setExcelData] = useState([]);
    const [textData, setTextData] = useState('');
    const lines = textData.split(/\n/g);
    const [isTableExpanded, setIsTableExpanded] = useState(true);  const formValues = localStorage.getItem("formValues");
    var stringify = JSON.parse(formValues);
    const scope = stringify[0].scope
    const attribute = stringify[0].attribute;
    const marketplace = stringify[0].marketplace;



    const toggleTable = () => {
        setIsTableExpanded(!isTableExpanded);
    };


    useEffect(() => {
        const readExcel = async () => {
            if (scope === "SHIRT" && attribute === "material") {
                const valuesFile = await fetch('./data/SHIRT/material/enum_values.xlsx');
                const valuesData = await valuesFile.arrayBuffer();
                const workbook = XLSX.read(valuesData, {type: 'array'});
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1});
                setExcelData(jsonData);
            }
            if (scope === "HEALTH_PERSONAL_CARE" && attribute === "unit_count") {
                const valuesFile = await fetch('./data/SHIRT/material/enum_values.xlsx');
                const valuesData = await valuesFile.arrayBuffer();
                const workbook = XLSX.read(valuesData, {type: 'array'});
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1});
                setExcelData(jsonData);
            }
        };

        const readTextFile = async () => {
            try {
                const constraintFile = await fetch('./data/Consistency_Metrics_SHIRT-material.json');
                const constraintData = await constraintFile.text();
                setTextData(constraintData);
            } catch (error) {
                console.error('Error reading text file:', error);
            }
        };

        readExcel();
        readTextFile();
    }, []);

    return (
        <div>
            <h1>Normalization Information</h1>

            <Card className="text-start">

                <Card.Header style={{height: '5vh'}}><h4>Contact Information</h4> </Card.Header>
                <Card.Body>
                    {/*<Card.Title>Context</Card.Title>*/}
                    <Card.Text><b>CTI: </b> Catalog/{scope}/{marketplace}</Card.Text>
                    <Card.Text><b>Wiki/FAQ: </b> <a href={"https://w.amazon.com/bin/view/ASCS-DNS/Information/"}>https://w.amazon.com/bin/view/{scope}/{marketplace}/ </a></Card.Text>
                </Card.Body>
                {/*<Card.Footer className="text-muted" style={{height: '5vh'}}></Card.Footer>*/}
            </Card>

            {/*<Card className={`collapsible-card ${isTableExpanded ? 'expanded' : ''}`}>*/}
            {/*    <Card.Header style={{height: '5vh'}} onClick={toggleTable}>*/}
            {/*        <h2>Metadata for SHIRT, [material], en_US</h2>*/}
            {/*        <span className={`collapse-icon ${isTableExpanded ? 'expanded' : ''}`}></span>*/}
            {/*    </Card.Header>*/}
            {/*    <Card.Body>*/}

            <Card className="text-start">
                {/*<Card.Header style={{height: '5vh'}}>*/}

                {/*    <span><h4>Metadata for SHIRT, [material], en_US</h4> <Button variant="primary" >View in Catalog Search</Button></span>*/}
                {/*    /!*<div className="text-end"></div>*!/*/}
                {/*    /!*<span className={`collapse-icon ${isTableExpanded ? 'expanded' : ''}`}></span>*!/*/}
                {/*</Card.Header>*/}
                <Card.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '5vh' }}>
                    <h4 style={{ marginRight: 'auto' }}>Metadata for {scope}, {attribute}, {marketplace}</h4>
                    <Button class="btn btn-primary btn-sm" style={{ padding: '1px' }}>Edit</Button>
                    <Button class="btn btn-primary btn-sm" style={{ padding: '1px' }}>Download</Button>
                </Card.Header>
                <Card.Body>


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
                </Card.Body>
            </Card>
        </div>
    );
};
