import React from 'react'; 

const ContactFormInput = ({label, fillerText, name, rows}) => 
    <div> 
        <p className="full"> 
            <label>{label}</label> 
            <textarea name={name} rows={rows} placeholder={fillerText}></textarea> 
        </p> 
    </div> 

export default ContactFormInput; 