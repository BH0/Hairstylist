import React from 'react'; 

// these components should be in a folder called "Contact" 
import ContactFormInput from '../Components/ContactFormInput'; 
import ContactFormTextarea from '../Components/ContactFormTextarea'; 

const ContactForm = ({}) => 
    <div> 
        <form className="contact-form"> 
            <ContactFormInput label="Name" type="text" name="name" /> 
            <ContactFormInput label="Email" type="email" name="email" /> 
            <ContactFormInput label="Name" type="text" name="name" /> 
            <ContactFormTextarea label="Message" name="message" rows="5" fillerText="I love your product" /> 
            <p className="full"> 
                <button>Submit</button> 
            </p> 
        </form> 
    </div> 

export default ContactForm; 