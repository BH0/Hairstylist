import React from 'react'; 

const Section = ({heading, paragraph, isLight}) => 
    <div className={`section ${isLight ? 'section-light' : 'section-dark'}`}> 
        <h2>{heading}</h2> 
        <p>{paragraph}</p> 
    </div> 

export default Section; 