// import { useForm } from "react-cool-form";
// import { useNavigate } from 'react-router-dom';


// const Field = ({ label, id, error, ...rest }) => (
//   <div>
//     <label htmlFor={id}>{label}</label>
//     <input id={id} {...rest} />
//     {error && <p>{error}</p>}
//   </div>
// );

// export default function InputForm() {
//     const navigate = useNavigate();
    
//     function onSubmit(data) {
//       navigate("/attributeInfo");
//     }

//   const { form, use } = useForm({
//     defaultValues: { scope: "", attribute: "", marketplace: "" },
//     onSubmit: (values) => navigate("/attributeInfo"),
//   });


//   // We can enable the "errorWithTouched" option to filter the error of an un-blurred field
//   // Which helps the user focus on typing without being annoyed by the error message
//   const errors = use("errors", { errorWithTouched: true }); // Default is "false"

//   return (
//     <form ref={form} noValidate>
//       <Field
//         label="Scope"
//         id="scope"
//         name="scope"
//         // Support built-in validation
//         required
//         error={errors.scope}
//       />
//       <Field
//         label="Attribute"
//         id="attribute"
//         name="attribute"
//         required
//         error={errors.attribute}
//       />
//       <Field
//         label="Marketplace"
//         id="marketplace"
//         name="passmarketplaceword"
//         required
//         error={errors.marketplace}
//       />
//       <input type="submit" />
//     </form>

//   );
// };

// import { TextField, Button, Container, Stack } from '@mui/material';
// import { useForm } from "react-cool-form";
// import React, { useEffect, useState } from "react";
// import { Outlet, Link } from "react-router-dom";


// export default function InputForm() {
//     const [scope, setScope] = useState('')
//     const [attribute, setAttribute] = useState('')
//     const [marketplace, setMarketplace] = useState('')


//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(scope, attribute, marketplace) 
//   }


//  return (
//    <div>
//      <h1>Enter Context Information</h1>
//             <form onSubmit={handleSubmit} action={<Link to="/attributeInfo" />}>
//                     <TextField
//                         type="text"
//                         variant='outlined'
//                         color='secondary'
//                         label="Scope"
//                         onChange={e => setScope(e.target.value)}
//                         value={scope}
//                         required
//                     />
//                     <TextField
//                         type="text"
//                         variant='outlined'
//                         color='secondary'
//                         label="Attribute"
//                         onChange={e => setAttribute(e.target.value)}
//                         value={attribute}
//                         required
//                     />
//                 <TextField
//                     type="text"
//                     variant='outlined'
//                     color='secondary'
//                     label="Marketplace"
//                     onChange={e => setMarketplace(e.target.value)}
//                     value={marketplace}
//                     required
//                     sx={{mb: 4}}
//                 />
//                 <Button variant="outlined" color="secondary" type="submit">Submit</Button>
//             </form>     
//    </div>
//  );
// }

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