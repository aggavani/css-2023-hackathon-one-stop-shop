import React, { Component, useState, useEffect } from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function AsinInputForm() {
  const [initialValues, setInitialValues] = useState({
    asin:"",
    attribute:"",
    marketplace:""
  });
  const [formValues, setFormValues] = useState([]);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const submitForm = (event) => {
    event.preventDefault();
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
    handleShow();
  };

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);
  return (
    <div>
      <h1>Enter ASIN Information</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ASIN</Form.Label>
        <Form.Control type="asin" placeholder="ASIN" onChange={(e) =>
            setInitialValues({ ...initialValues, asin: e.target.value })
          }/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Attribute</Form.Label>
        <Form.Control type="attribute" placeholder="Attribute" onChange={(e) =>
            setInitialValues({ ...initialValues, attribute: e.target.value })
          }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Marketplace</Form.Label>
        <Form.Control type="marketplace" placeholder="Marketplace" onChange={(e) =>
            setInitialValues({ ...initialValues, marketplace: e.target.value })
          }/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitForm}>
        Submit
      </Button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>Retrieving ASIN Information</Modal.Body>
        <Modal.Footer>
    <Link to="/asinInfo">
        <Button variant="secondary" size="lg">
        Proceed
      </Button>
    </Link>
        </Modal.Footer>
      </Modal>

    </Form>
        <div className="d-grid gap-2">
    </div>

    </div>
  );
}