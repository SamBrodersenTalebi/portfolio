import React from 'react';
import './portfolio.css';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import CardBox from '../card/card';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      openClassroom: [
        {
          projectname: 'Board Game',
          id: 'O1',
          description:
            'Turn based board game where players battle if they cross adjacent squares. Each player can move 1-3 tiles and they switch weapons if they land on a weapon tile. This project was created using JavaScript classes and jQuery.',
          image: '../portfolio/images/BoardGame.PNG',
          link: 'https://github.com/SamBrodersenTalebi/Ravenous',
        },
        {
          projectname: 'Film Festival',
          id: 'O2',
          description:
            'Created a static website using Bootstrap. The website contained pre-registration page (not functional). In addition created a project brief that outlined a summary of what work needed to be done.',
          image: '../portfolio/images/Brooklyn.PNG',
          link: 'https://github.com/SamBrodersenTalebi/filmfestival',
        },
        {
          projectname: 'Restaurant Review Site',
          id: 'O3',
          description:
            'Launched a restaurant review site using React. User can view nearby restaurants and add new ones by clicking the map which was fetched from Google Places API.',
          image: '',
          link: 'https://github.com/SamBrodersenTalebi/p7',
        },
      ],
      codeCademy: [
        {
          projectname: 'Jammming',
          id: 'C1',
          description:
            'Built a React application using the Spotify API. Users were allowed to search the Spotify library, create a custom playlist and then save it to their Spotify account.',
          image: '../portfolio/Jammming.PNG',
          link: 'https://github.com/SamBrodersenTalebi/JammmingCodecademy',
        },
        {
          projectname: 'Ravenous',
          id: 'C2',
          description:
            'Built React app where users could search for restaurants based on location and type of restaurant. In addition users could sort by 3 filters.',
          image: '../portfolio/Ravenous.PNG',
          link: 'https://github.com/SamBrodersenTalebi/Ravenous',
        },
      ],
      udacity: [
        {
          projectname: 'Pixel Art Marker',
          id: 'U1',
          description:
            'Built a single-page web application that allowed users to draw pixel art on a customizable canvas.',
          image: '../portfolio/images/PixelArt.PNG',
          link: 'https://github.com/SamBrodersenTalebi/PixelArt',
        },
        {
          projectname: 'Rock Paper Scissors',
          id: 'U2',
          description:
            'Created a Rock, Paper and Scissors game that allowed users to play against a computer player.',
          image: '../portfolio/images/Rock.PNG',
          link: 'https://github.com/SamBrodersenTalebi/RockPaperScissors',
        },
      ],
      ownProjects: [
        {
          projectname: 'Blog App',
          id: 'S1',
          description:
            'Created a MERN app where a user can add, delete, comment and like blog posts. In order to use all functionalities a user must login. View video of app at: https://streamable.com/xm780m',
          image: '../portfolio/images/blogApp.PNG',
          link: 'https://github.com/SamBrodersenTalebi/RockPaperScissors',
        },
        {
          projectname: 'Library App',
          id: 'S2',
          description:
            'Created library app using GraphQL and React. A user can add new books, sort books by genre and view recommended books.',
          image: '../portfolio/images/library.PNG',
          link: 'https://github.com/SamBrodersenTalebi/RockPaperScissors',
        },
      ],
    };
  }

  toggleCategories() {
    //Map over state
    let openClassroom = this.state.openClassroom.map((object) => {
      let i = 0;
      return <CardBox object={object} key={i++} />;
    });

    let codeCademy = this.state.codeCademy.map((object) => {
      let i = 0;
      return <CardBox object={object} key={i++} />;
    });

    let udacity = this.state.udacity.map((object) => {
      let i = 0;
      return <CardBox object={object} key={i++} />;
    });

    let ownProjects = this.state.ownProjects.map((object) => {
      let i = 0;
      return <CardBox object={object} key={i++} />;
    });

    if (this.state.activeTab === 0) {
      return <div className='projects-grid'>{openClassroom}</div>;
    } else if (this.state.activeTab === 1) {
      return <div className='projects-grid'>{codeCademy}</div>;
    } else if (this.state.activeTab === 2) {
      return <div className='projects-grid'>{udacity}</div>;
    } else if (this.state.activeTab === 3) {
      return <div className='projects-grid'>{ownProjects}</div>;
    }
  }

  render() {
    return (
      <div className='tab' id='Portfolio'>
        <div>
          <h2 className='title'>Portfolio</h2>
        </div>
        <div className='category-tabs'>
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab> OpenClassrooms </Tab>
            <Tab> Codecademy </Tab>
            <Tab> Udacity </Tab>
            <Tab> Own Projects </Tab>
          </Tabs>

          <Grid>
            <Cell col={12}>
              <div className='content'>{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}
