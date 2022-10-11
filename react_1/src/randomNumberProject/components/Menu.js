import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import Led from './Led';

const Menu = () => {


  const [toggle, setToggle] = useState(false);

  const ledToggle = () => {
    setToggle(!toggle)
  }

  return (
      <div className="menu">
          <h1>Random Number</h1>
          <Button onClick={ledToggle}>click</Button>
          {toggle === true ? <Led/> : null}
      </div>
  );
}

export default Menu