import {
 HeroLayout2 
} from './ui-components';
import { Outlet, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Header from './Header';

export default function Home() {
  return (
    <div style={{height: '100vh'}}>
        <HeroLayout2 autoLayoutHorizontal37891393={
        <Link to="/inputForm">
            <Button variant="contained">Get Started</Button>
        </Link>
     }/>
    </div>
  );
};
