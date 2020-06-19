import React from 'react';
import './sidedrawer.css'

const Sidedrawer = (props) => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href='/projects'>Projects</a></li>
        <li><a href='/education'>Education</a></li>
        <li><a href='/techstack'>Techstack</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Sidedrawer;