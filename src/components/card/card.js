import React from 'react';
import './card.css';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';

export default class CardBox extends React.Component{
    
    render(){
        return(
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}} className="card">
                <CardTitle id={this.props.object.id} style={{height:'176px'}} className="card-title">
                    <a target="_blank" href={this.props.object.link} id="link"></a>
                </CardTitle>
                <CardText style={{height:'150px', margin:"auto"}}>
                    <h4 style={{color:"#387db1",marginTop:"0px"}}>{this.props.object.projectname}</h4>
                    {this.props.object.description}
                </CardText>
                <CardActions>
                    <Button colored> <a href={this.props.object.link} target="_blank" style={{textDecoration:"none", color:"#557A95"}} className="github"> GitHub </a> </Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                </CardMenu>
            </Card>
        );
    }
}