import {
 HeroLayout2 
} from './ui-components';
import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <HeroLayout2 autoLayoutHorizontal37891393={
    <Link to="/inputForm">
        <button>Get Started</button>
      </Link>
}/>
  );
};
