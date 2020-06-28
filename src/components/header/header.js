import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='header' id='Home'>
        <h1>
          Hi, I'm <span className='name'> Sam Brodersen</span>.
        </h1>
        <p>
          {' '}
          Web developer passionate about building web apps. <br /> Mainly use
          the MERN stack, but proficient with Python/Django as well.
        </p>
        <a href='#Portfolio'>Portfolio</a>
      </header>
    );
  }
}
