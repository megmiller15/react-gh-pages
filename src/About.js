import React from 'react';



export default function EpicNenu() {
  return (
    <div className = "about-section" id = "about">

      <div className = "headline-div">
        <h1 className = "about-hed"> A <span className = "heavy"> UNIQUE </span> COMBINATION </h1>
      </div>
      <div className = "about-inner-container">
        <div className = "about-card designer">
          <div className = "about-icon">
           <img className = "about-image-icon" src = "./engineer.png"  alt="no clue"/>
          </div>
          <h3 className = "about-card-head"> WEB DEVELOPMENT </h3>
          <p> Bringing Designs to Life </p>
        </div>
         <div className = "about-card data">
          <div className = "about-icon">
           <img className = "about-image-icon" src = "./painbrush.png" alt="no clue" />
          </div>
          <h3 className = "about-card-head">WEB DESIGN</h3>
          <br />
          <p> Visual and Practical  </p>
        </div>
        <div className = "about-card engineer">
          <div className = "about-icon">
           <img className = "about-image-icon" src = "./graph.png" alt="no clue"/>
          </div>
          <h3 className = "about-card-head"> SEARCH ENGINE OPTIMIZATION </h3>
          <p className = "about-card-text">Making Web Design and Development Convert </p>
        </div>
      </div>
     
     
    </div>
   
  );
}

