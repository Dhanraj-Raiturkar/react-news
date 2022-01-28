import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return <div className={classes.header}>
    {/* <span class="material-icons">
      newspaper
    </span> */}
    <h2>React-News</h2>
  </div>;
};

export default Header;
