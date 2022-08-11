import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='nav_bar'>
      <ul>
        <li>
          <Link to={'/state'}>useState</Link>
        </li>
        <li>
          <Link to={'/useEffect'}>useEffect</Link>
        </li>
        <li>
          <Link to={'/conditions'}>Conditions</Link>
        </li>
        <li>
          <Link to={'/forms'}>Forms</Link>
        </li>
        <li>
          <Link to={'/ref'}>Ref</Link>
        </li>
        <li>
          <Link to={'/reducer'}>Reducer</Link>
        </li>
        <li>
          <Link to={'/drilling'}>Drilling</Link>
        </li>
        <li>
          <Link to={'/context'}>useContext</Link>
        </li>
        <li>
          <Link to={'/custom'}>Custom-hooks</Link>
        </li>
        <li>
          <Link to={'/props'}>Prop-types</Link>
        </li>
        <li>
          <Link to={'/memo'}>useMemo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
