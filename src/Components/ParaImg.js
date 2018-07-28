
import React, { Component } from 'react'

class ParaImg extends Component {
    constructor(props) { 
        super(props); 

        this.background = this.props.url, 
        this.styling = { 
            backgroundImage: `url(${this.background})` , 
            minHeight: "400px",  
            position: "relative",  
            opacity: "0.70",  
            minHeight: "150px", 
            backgroundPosition: "center",  
            backgroundSize: "cover", 
            backgroundRepeat: "no-repeat", 
            backgroundAttachment: "fixed", 
        } 
    } 
    render () { 
        return (
            <div style={this.styling}>
                <div className="ptext"> 
                    <span className={`border ${this.props.isTrans ? 'trans' : ''}`}> 
                        {this.props.text} 
                    </span> 
                </div> 
            </div> 
        ); 
    }
}

export default ParaImg; 
