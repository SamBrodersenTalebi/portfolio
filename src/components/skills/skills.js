import React, { Component } from 'react';
import './skills.css';
import ProgrammingSkill from '../programmingskill/programmingskill';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          language: 'JavaScript',
          level: '80%',
        },
        {
          language: 'AWS',
          level: '50%',
        },
        {
          language: 'Git',
          level: '60%',
        },
        {
          language: 'Python',
          level: '30%',
        },
        {
          language: 'ExpressJS/GraphQL',
          level: '60%',
        },
        {
          language: 'MongoDB/DynamoDB',
          level: '45%',
        },
        {
          language: 'ReactJS/NextJS',
          level: '80%',
        },
        {
          language: 'HTML/CSS/SASS',
          level: '80%',
        },
        {
          language: 'Appsync/Amplify',
          level: '50%',
        },
        {
          language: 'REST API',
          level: '50%',
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
