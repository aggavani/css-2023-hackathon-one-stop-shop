import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


// import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         {/* <MenuIcon /> */}
    //       </IconButton>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       </Typography>
    //       <Link to="/">
    //       <Button color="inherit">Home</Button>
    //       </Link>
    //     </Toolbar>
    //   </AppBar>
    // </Box>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>

            <Link to="/">
           <Button >Home</Button>
           </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}