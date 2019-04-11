import React, {Component} from 'react';
import Menu from './Menus.js'
import About from './About.js'
import './App.css'
import Data from './Data.js'
import Grid from './Grid.js'
import Scrollchor from 'react-scrollchor';
import Skills from './Skills.js'
import EpicMenu from './EpicMenu';
import logo from './logo1.png';
// import Portfolio from './Portfolio.js'

export default class App extends Component {
    constructor() {
      super ();    
      this.state = {portfolio: Data};
      this.filterPortfolio = this.filterPortfolio.bind(this);
      this.setOriginalState = this.setOriginalState.bind(this);
    }

    componentDidMount() {
        this.setOriginalState();
    }

     setOriginalState() {
        this.setState({portfolio: Data})
    }


    filterPortfolio (filter) {
        const originalData = {portfolio: Data}

        const filteredData = originalData.portfolio.filter ((item) => {
        return item.category.includes( filter );
        })

        this.setState ({
        portfolio: filteredData
        })
 
        
    }


    render () {
      let links = [
        { label: 'Home', link: '#home', active: true },
        { label: 'About', link: '#skills-section' },
        { label: 'Portfolio', link: '#portfolio' },
        { label: 'Contact Us', link: 'mailto:megan.n.miller27@gmail.com' },
      
      ];
        return (
          
            <div> 
              <div className="container center">
        <EpicMenu links={links} logo={logo} />
        
         </div>
                <Menu />
                
                <About />
                <Skills />
                <Grid portfolio = {this.state.portfolio} 
                      filterFunction = {this.filterPortfolio}
                      originalState = {this.setOriginalState} />
                <div className = "scroll-top">
                    <Scrollchor to= '#menu' className="top-button"> Top </Scrollchor>
                </div>
            </div>
        );
        
    }
    
    
}