import React, { Component, useState, useEffect } from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function InputForm() {
  const [initialValues, setInitialValues] = useState({
    scope:"",
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
      <h1>Enter Context Information</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Scope</Form.Label>
        <Form.Control type="scope" placeholder="Scope" onChange={(e) =>
            setInitialValues({ ...initialValues, scope: e.target.value })
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
        <Modal.Body>Retrieving Context Information</Modal.Body>
        <Modal.Footer>
    <Link to="/attributeInfo">
        <Button variant="primary" size="lg">
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