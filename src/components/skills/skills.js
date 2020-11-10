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
          language: 'AWS',
          level: '50%',
        },
        {
          language: 'Git',
          level: '70%',
        },
        {
          language: 'Python/Django',
          level: '30%',
        },
        {
          language: 'ExpressJS/GraphQL',
          level: '60%',
        },
        {
          language: 'MongoDB/PostgreSQL',
          level: '45%',
        },
        {
          language: 'React/Redux',
          level: '80%',
        },
        {
          language: 'HTML/CSS',
          level: '80%',
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