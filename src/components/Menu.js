import { List as MenuIcon } from 'react-bootstrap-icons';
import { useState } from 'react';
// import DropdownMenu from './Dropdown';
import './Menu.css';

export default function Menu() {

  const [status, setStatus] = useState(false);
  const changeStatus = () => {
    setStatus(!status)
  }
  return (
    <div className="MenuIcon">
      <MenuIcon />
      {/* <DropdownMenu /> */}
    </div>
  );
}

