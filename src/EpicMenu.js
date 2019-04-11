import React, { Component } from 'react';
import './EpicMenu.css';


class EpicMenu extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false
        };
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    render() {
        

        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>
            ) : (
                <a className="menu__link" href={link.link}>{link.label}</a>
            );

            return (
                <li key={index} className="menu__list-item">
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav className="menu">
                <div style={{
                backgroundImage: 'url(' + this.props.logo + ')'
                }} className="menu__logo"></div>

                <div className="menu__right">
                    <ul className="menu__list">
                        {linksMarkup}
                    </ul>

                    
                </div>
            </nav>
        );
    }
}

export default EpicMenu;