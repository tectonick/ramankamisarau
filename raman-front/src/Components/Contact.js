import React, { useState, useEffect } from 'react';

function ContactInfo() {

    const [ContactData, setContactData] = useState({});

    useEffect(() => {
      setContactData({email: "raman.kamisarau@gmail.com", phone: "+41782363632"});
    }, []);

    return ( 
        <div className='contact-info'>
            <p>Email: {ContactData.email}</p>
            <p>Tel: {ContactData.phone}</p>
        </div>
     );
}

export default ContactInfo;