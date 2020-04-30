import React, { Component } from 'react';
import './skills.css';
import ProgrammingSkill from '../programmingskill/programmingskill';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          language: 'JavaScript/jQuery',
          level: '80%',
        },
        {
          language: 'HTML / CSS',
          level: '90%',
        },
        {
          language: 'Git',
          level: '70%',
        },
        {
          language: 'Python/Django',
          level: '40%',
        },
        {
          language: 'ExpressJS',
          level: '60%',
        },
        {
          language: 'MongoDB/PostgreSQL',
          level: '30%',
        },
        {
          language: 'React/Redux',
          level: '80%',
        },
        {
          language: 'Jest/Cypress',
          level: '30%',
        },
      ],
    };
  }
  render() {
    let i = 0;
    let skills = this.state.data.map((object) => {
      return <ProgrammingSkill skills={object} key={i++} />;
    });

    return (
      <div className='skills' id='Skills'>
        <h2 className='title'>Skills</h2>
        <div className='skillList'>{skills}</div>
      </div>
    );
  }
}
