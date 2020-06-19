import React from 'react';
import './toolbar.css'
import Toggle from './Toggle';



const Toolbar = props => {
  return (
    <header className='toolbar'>
      <nav className='toolbar_navigation'>
        <div className='toggle-toolbar-button'>
          <Toggle click={props.drawerClickHandler} />

        </div>
        <div className='toolbar_logo'><a href='/'>Keir Betts</a></div>
        <div className='spacer' />
        <div className='toolbar-nav-items'>
          <ul>
            <li><a href='/projects'>Projects</a></li>
            <li><a href='/education'>Education</a></li>
            <li><a href='/techstack'>Techstack</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>

        </div>
      </nav>
    </header>
  )
};

export default Toolbar;