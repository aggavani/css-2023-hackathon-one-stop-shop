import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function AttributeCard() {
  const formValues = localStorage.getItem("formValues");
  var stringify = JSON.parse(formValues);
  const scope = stringify[0].scope
  const attribute = stringify[0].attribute;
  const marketplace = stringify[0].marketplace;
  let card;

  if (scope === "SHIRT") {
    card = (
      <React.Fragment>
        <CardContent>
          <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
            Attribute Information
          </Typography>
          <Typography variant="h5" component="div">
            material
          </Typography>
          <Typography variant="body2">
            This attribute provides information related to the primary material used to manufacture the item.
            <br/> <br/>
          </Typography>
          <a href="https://w.amazon.com/bin/view/Metadata/material/"><Button size="small" sx={{textAlign: "center"}}>Learn
            More</Button></a>
        </CardContent>
      </React.Fragment>
    );
  } else if (scope === "HEALTH_PERSONAL_CARE") {
    card = (
      <React.Fragment>
        <CardContent>
          <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
            Attribute Information
          </Typography>
          <Typography variant="h5" component="div">
            unit_count
          </Typography>
          <Typography variant="body2">
            This attribute provides information related to unit_count.
            <br/> <br/>
          </Typography>
          <a href="https://w.amazon.com/bin/view/Metadata/unit_count/"><Button size="small" sx={{textAlign: "center"}}>Learn
            More</Button></a>
        </CardContent>
      </React.Fragment>
    );
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}