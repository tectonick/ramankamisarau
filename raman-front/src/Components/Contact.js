import React, { useState, useEffect } from 'react';
import Api from "../Utility/api";

function ContactInfo() {

    const [ContactData, setContactData] = useState({});

    useEffect(() => {
        Api.getContactData().then((data)=>{
            setContactData(data);
          })
    //   setContactData({email: "raman.kamisarau@gmail.com", phone: "+41782363632"});
    }, []);

    return ( 
        <div className='contact-info block'>
            {ContactData && <a href={"mailto:"+ContactData.Email}>Email: {ContactData.Email}</a>} <br/>
            {ContactData && <a href={"tel:"+ContactData.Phone}>Tel: {ContactData.Phone}</a>}
        </div>
     );
}

export default ContactInfo;