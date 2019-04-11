import React from 'react';
import './grid.scss'
import Card from './Card.js';


export default class Grid extends React.Component {
  constructor () {
    super ();
    this.state = {active: 2}
    this.handleClick = this.handleClick.bind(this);
    this.allClicks = this.allClicks.bind(this);
    this.clickAll = this.clickAll.bind(this);

  }

  allClicks (category, position){
    this.toggle(position)
    this.handleClick(category)
  }

  clickAll (position) {
    this.toggle(position)
    this.props.originalState ()
  }


  toggle(position){
    if (this.state.active === position) {
      this.setState({active : null })
    } else {
      this.setState({active: position})
    }
  }

  bgColor(position) {
    if(this.state.active === position) {
      return "#acd6ce";
    } return "";
  }

  textColor(position) {
     if(this.state.active === position) {
      return "#ffffff";
    } return "";
  }
    
  handleClick(category) {
  this.props.filterFunction(category);
  }
  
  render () {
    
  return (
    <div className = "portfolio-container" id="portfolio">
      <div className = "portfolio-grid">
        <div className = "headline-div">
          <h1 className = "about-hed"> MY <span className = "heavy"> WORK </span> </h1>
          <p>Mockups of Sites I've Built</p>
        </div>
      
      <div className = "card-holder">
        {
          this.props.portfolio.map ((item, index) => {
            return <Card  key = {index}
              name = {item.name}
              image = {item.image}
              description = {item.description}
              github = {item.github}
              web = {item.web}
              />
            })
          }
      </div>
      </div>
    </div>
  );

  }
}