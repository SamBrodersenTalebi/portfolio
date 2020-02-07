import React, { Component } from 'react';
import  "./skills.css"
import ProgrammingSkill from '../programmingskill/programmingskill';

export default class Skills extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          "language": "Javascript/jQuery",
          "level": "80%"
        },
        {
          "language": "CSS",
          "level": "80%"
        },
        {
          "language": "HTML5",
          "level": "90%"
        },
        {
          "language": "Python",
          "level": "30%"
        },
        {
          "language": "ReactJS",
          "level": "60%"
        },
        {
          "language": "MySQL",
          "level": "30%"
        }
      ]
    }
  }
  render(){
    let i = 0;
    let skills = this.state.data.map((object)=>{
      return(
        <ProgrammingSkill skills = {object} key={i++}/>
      )
    })

    return(
      <div className="skills" id="Skills">
        <h2 className="title">Skills</h2>
        <div className="skillList">
          {skills}
        </div>
      </div>
    );
  }
}