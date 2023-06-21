import {
 HeroLayout2 
} from './ui-components';
import { Outlet, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import React, { Component, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

export default function Home() {
  return (
    <div style={{height: '100vh'}}>
        <HeroLayout2 autoLayoutHorizontal37891393={
        <div>
        <Link to="/inputForm">
            <Button variant="contained">Enter Context</Button>
        </Link> {"     "}
        <Link to="/asinInputForm">
        <Button variant="contained">
        Enter ASIN
      </Button>
      </Link>
</div>
        
     }/>
    </div>
  );
};
