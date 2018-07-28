import React, { Component } from 'react';

class Nav extends Component {   
    constructor(props) { 
        super(props); 
    }

    openSlideMenu() { 
        document.querySelector("#side-menu").style.width = "250px"; 
    }
    closeSlideMenu() { 
        document.querySelector("#side-menu").style.width = "0"; 
    } 

    render() { 
        return (
            <div> 
                <nav className="navbar"> 
                    <span className="open-slide"> 
                        <a href="#"> 
                            <svg width="30" height="30" onClick={this.openSlideMenu}> 
                                <path d="M0,5 30,5" stroke="gold" strokeWidth="5"/>
                                <path d="M0,14 30,14" stroke="gold" strokeWidth="5"/>
                                <path d="M0,23 30,23" stroke="gold" strokeWidth="5"/>
                            </svg> 
                        </a> 
                    </span> 
                </nav> 
                <div id="side-menu" className="side-nav"> 
                    <a href="#"  to="" className="button-close" onClick={this.closeSlideMenu}>&times;</a> 
                    <a className="contact" href="#contact-section">Contact</a> 
                    <a className="stats" href="#stats-section">Stats</a> 
                    <a className="back-to-top-anchor" href="#top">Back to top</a> 
                </div> 
            </div>             
        ); 
    } 
} 


export default Nav;


