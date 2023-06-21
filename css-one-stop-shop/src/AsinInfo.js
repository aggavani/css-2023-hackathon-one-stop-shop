import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function createData(name, asin, sku) {
  return { name, asin, sku };

}

const asinPC = "[\n\n 'catp:Product', \n 'catp:BrandedProduct', \n 'catp:TargetedProduct', \n 'catp:UnisexAdultProduct', \n 'catp:AdultTargetProduct',\n'catp:Footwear',\n'catp:CrocsFootwear',\n'catp:UnisexAdultFootwear',\n'catp:Sandal',\n'catp:SingleItemProduct'\n]"
const footwearSize = "\{gender:men, age_group:adult, size_system:uk_footwear_size_system, width:medium, size_class:numeric, size:numeric_11}                             "

const asinLink = () => {
    return(<a href="https://csi.amazon.com/view?view=submission_history&item_id=&marketplace_id=&customer_id=47195089812&merchant_id=&sku=B01N6J6XWT&fn_sku=&gcid=&fulfillment_channel_code=&listing_type=purchasable&submission_id=&order_id=&external_id=&search_string=&realm=USAmazon&stage=prod&domain_id=&keyword=&submit=Show"></a>)
}
    const rows = [
  createData("PT Scope", "SHOES", "SANDAL"),
  createData("PC Scope", asinPC, "N/A"),
  createData("[department]", "unisex-adult", "mens"),
  createData("[brand]", "crocs", "crocs"),
  createData("[footwear_size]", footwearSize, footwearSize),
  createData("Winning [size] Value on ASIN", "11 UK", "11 UK (M12)"),
  createData("Contributing System", "DNS (Data Augmenter)", "Retail / Seller Submitted"),
  createData("Modified Date", "2023-06-21T01:56:23.820Z", "2023-06-14T11:23:40.280Z"),
];

export default function App() {
    const formValues = localStorage.getItem("formValues");
    var stringify = JSON.parse(formValues);
    const asin = stringify[0].asin
    const attribute = stringify[0].attribute;
    const marketplace = stringify[0].marketplace;


  return (
    <div>
            <h2>Retrieved Information For Provided ASIN: </h2>
        <Card className="text-center">
      <Card.Header style={{height: '5vh'}}></Card.Header>
      <Card.Body>
        <Card.Title>Provided Information</Card.Title>
        <Card.Text>ASIN: {asin}        </Card.Text>
        <Card.Text>Attribute: {attribute}        </Card.Text>
        <Card.Text>Marketplace: {marketplace}       </Card.Text>
        <a href="https://csi.amazon.com/view?view=simple_product_data_view&item_id=B01N6J6XWT&marketplace_id=1&customer_id=&merchant_id=&sku=&fn_sku=&gcid=&fulfillment_channel_code=&listing_type=purchasable&submission_id=&order_id=&external_id=&search_string=&realm=USAmazon&stage=prod&domain_id=&keyword=&submit=Show"> <Button variant="primary">View in CSI Data Viewer</Button></a>
      </Card.Body>
      <Card.Footer className="text-muted" style={{height: '5vh'}}></Card.Footer>
    </Card>

    <TableContainer component={Paper}>
      <Table sx={{
    minWidth: 650,
    "& .MuiTableCell-root": {
      border: '1px solid black'
    }
        }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={1}>
            </TableCell>
            <TableCell align="center" colSpan={1}>
              Item Details
            </TableCell>
            <TableCell align="center" colSpan={1}>
              Winning SKU Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell align="center" width='100px'>
                {row.name}
              </TableCell>
              <TableCell align="center" width='300px'>{row.asin}</TableCell>
              <TableCell align="center" width='300px'>{row.sku}</TableCell>
            </TableRow>
          ))}
                      <TableRow >
              <TableCell align="center" width='100px'>
                Submission History
              </TableCell>
              <TableCell align="center" width='300px'><a href="https://csi.amazon.com/view?view=submission_history&item_id=&marketplace_id=&customer_id=47195089812&merchant_id=&sku=B01N6J6XWT&fn_sku=&gcid=&fulfillment_channel_code=&listing_type=purchasable&submission_id=&order_id=&external_id=&search_string=&realm=USAmazon&stage=prod&domain_id=&keyword=&submit=Show">Link</a></TableCell>
              <TableCell align="center" width='300px'><a href="https://csi.amazon.com/view?view=submission_history&item_id=&marketplace_id=&customer_id=74055363312&merchant_id=&sku=B01N6J6XWT&fn_sku=&gcid=&fulfillment_channel_code=&listing_type=purchasable&submission_id=&order_id=&external_id=&search_string=&realm=USAmazon&stage=prod&domain_id=&keyword=&submit=Show">Link</a></TableCell>
            </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}