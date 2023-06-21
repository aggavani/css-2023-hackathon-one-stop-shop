import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import AttributeCard from './AttributeCard';
import Checkbox from '@mui/material/Checkbox';


import { Outlet, Link } from "react-router-dom";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const column = { id: 'name', label: 'Name', minWidth: 170 }


export default function AttributeInfo() {
    const formValues = localStorage.getItem("formValues");
    var stringify = JSON.parse(formValues);
    const scope = stringify[0].scope
    const attribute = stringify[0].attribute;
    const marketplace = stringify[0].marketplace;
  return (
    <div style={{height: '100vh'}}>
        <h2>Retrieved Information For Provided Context: </h2>
        <Card className="text-center">
      <Card.Header style={{height: '5vh'}}></Card.Header>
      <Card.Body>
        <Card.Title>Context</Card.Title>
        <Card.Text>Scope: {scope}        </Card.Text>
        <Card.Text>Attribute: {attribute}        </Card.Text>
        <Card.Text>Marketplace: {marketplace}       </Card.Text>
        <a href="https://catalogsearchweb.aka.amazon.com/"> <Button variant="primary">View in Catalog Search</Button></a>
      </Card.Body>
      <Card.Footer className="text-muted" style={{height: '5vh'}}></Card.Footer>
    </Card>

         <Card className="text-center">
      <Card.Body>
              <ListGroup variant="flush">
        <ListGroup.Item>Number of ASINs: 441,711,786</ListGroup.Item>
        <ListGroup.Item>Fields: [language_tag], [value]</ListGroup.Item>
        <ListGroup.Item>Localized: Yes</ListGroup.Item>
        <ListGroup.Item>Category Manager: shirt-material@amazon.com </ListGroup.Item>
      </ListGroup>

      </Card.Body>
    </Card>

        <AttributeCard />




            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Source of Data</th>
           <th>Affects Context?</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Link to="/normalization">

            <Button variant="outline-secondary">Normalization</Button>
            </Link>
            </td>
           <td><Checkbox {...label} defaultChecked size="small" /></td>

        </tr>
        <tr>
          <td>
            <Link to="/metrics">
            <Button variant="outline-secondary">Metrics</Button>
            </Link>
            </td>
           <td><Checkbox {...label} defaultChecked size="small" /></td>

        </tr>
        <tr>
          <td>
            <Link to="/validation">
            <Button variant="outline-secondary">Validation</Button>
            </Link>
            </td>
          <td><Checkbox {...label} defaultChecked size="small" /></td>

        </tr>
        <tr>
          <td>
            <Link to="/consistency">
            <Button variant="outline-secondary">Consistency</Button>
            </Link></td>
           <td><Checkbox {...label} defaultChecked size="small" /></td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
};
