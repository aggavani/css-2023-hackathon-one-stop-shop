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

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Attribute Information
      </Typography>
      <Typography variant="h5" component="div">
        material
      </Typography>
      <Typography variant="body2">
        This attribute provides information related to the primary material used to manufacture the item.
        <br /> <br />
      </Typography>
            <a href="https://w.amazon.com/bin/view/Metadata/material/"><Button size="small"  sx={{ textAlign: "center" }}>Learn More</Button></a>
    </CardContent>
  </React.Fragment>
);

export default function AttributeCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}