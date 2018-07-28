import React from 'react'; 

const ContactFormInput = ({label, type, name}) => 
    <div> 
        <p> 
            <label>{label}</label> 
            <input type={type} name={name} /> 
        </p> 
    </div> 

export default ContactFormInput; 